const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
var bodyParser = require("body-parser");
var gCodeParser = require("gcode-parser");
const printerState = require("./Controllers/PrinterState.js");
const RegisterSeller = require("./Controllers/RegisterSeller.js");
const NewEscrow = require("./Controllers/SaveNewEscrow.js");
let mongoose = require("mongoose");

const mv = require("mv");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());

const mongoURI =
  "mongodb+srv://Derek:Uberemo1234!@cluster0.9fhyh.mongodb.net/3dETH?retryWrites=true&w=majority";
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

var _printerState = new printerState();
var _newSeller = new RegisterSeller();
var _newEscrow = new NewEscrow();
var folder_path = "./prints";
const _ethMetrics = require("./Controllers/EthMetrics.js");

var seller = mongoose.model("Seller");
var escrow = mongoose.model("Escrow");

app.post("/uploadAsync", (req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" });
  }
  const myFile = req.files.file;
  const buyerAddr = req.body.buyerAddr;
  var printSize = "";

  myFile.mv(`${folder_path}/${myFile.name}`, (err) => {
    if (err) {
      return res.status(500).send({ msg: "Error occured" });
    }

    var stream = fs.createReadStream(`${folder_path}/${myFile.name}`, {
      encoding: "utf8",
    });
    gCodeParser.parseStream(stream, function (err, results) {
      var time = results[1].line.substr(6);
      var parse = parseInt(time);

      if (parse >= 0 && parse <= 3600) {
        printSize = "small";
      } else if (parse > 3600 && parse <= 18000) {
        printSize = "medium";
      } else if (parse > 18000) {
        printSize = "large";
      } else {
        printSize = "marlin";
      }
      return res.send({
        name: myFile.name,
        path: `${folder_path}/${myFile.name}`,
        size: printSize,
      });
    });
  });
});

let currentPath = "";

app.post("/pathr", (req, res) => {
  currentPath = req.body.path;
  res.send(req.body.path);
});

app.get("/download", (req, res) => {
  var _path = currentPath;
  const file = __dirname + _path.substring(1);
  res.sendFile(file); // Set disposition and send it.
});

var ethPriceUSD;
setInterval(function () {
  _ethMetrics.getEthPrice().then((response) => {
    ethPriceUSD = response.data.USD;
  });
}, 30000);

app.post("/getPrinterStats", (req, res) => {
  _printerState.getPrinterState().then((data) => {
    res.send(data);
  });
});

app.post("/register", (req, res) => {
  _newSeller
    .register(
      req.body.sellerAddress,
      req.body.sellerEmail,
      req.body.sellerDescription,
      req.body.sellerRating,
      req.body.sellerActive,
      req.body.printModel,
      req.body.printerMaterial,
      req.body.spoolCol,
      req.body.printerWidth,
      req.body.printerLength,
      req.body.printerHeight,
      req.body.autoBedLevel,
      req.body.printerEndpoint,
      req.body.printerBearerToken,
      req.body.pricingSmall,
      req.body.pricingMedium,
      req.body.pricingLarge,
      req.body.shippingSmall,
      req.body.shippingMedium,
      req.body.shippingLarge,
      req.body.commission
    )
    .then((data) => {
      res.send(data);
    });
});

app.post("/saveNewEscrows", (req, res) => {
  _newEscrow
    .saveNewEscrow(
      req.body.sellerWallet,
      req.body.buyerWallet,
      req.body.printCost,
      req.body.buyerShippingAddress,
      req.body.printDL
    )
    .then((data) => {
      res.send(data);
    });
});

app.post("/getSellers", (req, res) => {
  seller.find(
    {},
    " _sellerAddress _sellerRating _sellerActive _printerModel _printerMaterial _spoolColor _autoBedLevel _printerEndpoint _printerBearerToken _commissionFee",
    function (err, sellers) {
      if (err) res.send(err);
      res.json(sellers);
    }
  );
});

app.post("/getSellerEscrows", (req, res) => {
  var address = req.body.sellerAddress;
  escrow.find(
    { _sellerWallet: { $in: address } },
    "_sellerWallet _buyerWallet _printCost _buyerShippingAddress _printDL",
    function (err, escrows) {
      if (err) res.send(err);
      res.json(escrows);
    }
  );
});

app.post("/getBuyerEscrows", (req, res) => {
  var address = req.body.buyerAddress;
  escrow.find(
    { _buyerWallet: { $in: address } },
    "_sellerWallet _buyerWallet _printCost _buyerShippingAddress _printDL",
    function (err, escrows) {
      if (err) res.send(err);
      res.json(escrows);
    }
  );
});

app.post("/getSellerPricing", (req, res) => {
  var address = req.body.sellerAddress;
  seller.find(
    { _sellerAddress: { $in: address.toString() } },
    "_printerModel _printerMaterial _spoolColor _pricingSmall _pricingMedium _pricingLarge _shippingSmall _shippingMedium _shippingLarge _commissionFee _printerEndpoint _printerBearerToken",
    function (err, sellerPricing) {
      if (err) res.send(err);
      //calculate USD/ETH pricing
      var priceSmall = parseFloat(
        sellerPricing[0]._pricingSmall +
          sellerPricing[0]._shippingSmall +
          ((sellerPricing[0]._pricingSmall + sellerPricing[0]._shippingSmall) /
            100) *
            sellerPricing[0]._commissionFee
      ).toFixed(2);
      var priceEthSmall = priceSmall / ethPriceUSD;

      var priceMedium = parseFloat(
        sellerPricing[0]._pricingMedium +
          sellerPricing[0]._shippingMedium +
          ((sellerPricing[0]._pricingMedium +
            sellerPricing[0]._shippingMedium) /
            100) *
            sellerPricing[0]._commissionFee
      ).toFixed(2);
      var priceEthMedium = priceMedium / ethPriceUSD;

      var priceLarge = parseFloat(
        sellerPricing[0]._pricingLarge +
          sellerPricing[0]._shippingLarge +
          ((sellerPricing[0]._pricingLarge + sellerPricing[0]._shippingLarge) /
            100) *
            sellerPricing[0]._commissionFee
      ).toFixed(2);
      var priceEthLarge = priceLarge / ethPriceUSD;

      res.json({
        ethSmall: parseFloat(priceEthSmall).toFixed(6),
        ethMedium: parseFloat(priceEthMedium).toFixed(6),
        ethLarge: parseFloat(priceEthLarge).toFixed(6),
        small: priceSmall,
        medium: priceMedium,
        large: priceLarge,
        commFee: sellerPricing[0]._commissionFee,
        model: sellerPricing[0]._printerModel,
        material: sellerPricing[0]._printerMaterial,
        spool: sellerPricing[0]._spoolColor,
        endpoint: sellerPricing[0]._printerEndpoint,
        token: sellerPricing[0]._printerBearerToken,
      });
    }
  );
});

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
