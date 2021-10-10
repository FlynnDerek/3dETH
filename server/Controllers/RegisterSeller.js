var mongoose = require("mongoose");
require("../models/Seller.js");

var SellerInstance = mongoose.model("Seller");

class Seller {
  async register(
    sellerAddress,
    sellerEmail,
    sellerDescription,
    sellerRating,
    sellerActive,
    printModel,
    printerMaterial,
    spoolCol,
    printerWidth,
    printerLength,
    printerHeight,
    autoBedLevel,
    printerEndpoint,
    printerBearerToken,
    pricingSmall,
    pricingMedium,
    pricingLarge,
    shippingSmall,
    shippingMedium,
    shippingLarge,
    commission
  ) {
    let seller_inst = new SellerInstance({
      _sellerAddress: sellerAddress,
      _sellerEmail: sellerEmail,
      _sellerDescription: sellerDescription,
      _sellerRating: sellerRating,
      _sellerActive: sellerActive,
      //printer info
      _printerModel: printModel,
      _printerMaterial: printerMaterial,
      _spoolColor: spoolCol,
      _printerWidth: printerWidth,
      _printerLength: printerLength,
      _printerHeight: printerHeight,
      _autoBedLevel: autoBedLevel,
      _printerEndpoint: printerEndpoint,
      _printerBearerToken: printerBearerToken,
      //pricing info
      _pricingSmall: pricingSmall,
      _pricingMedium: pricingMedium,
      _pricingLarge: pricingLarge,
      _shippingSmall: shippingSmall,
      _shippingMedium: shippingMedium,
      _shippingLarge: shippingLarge,
      _commissionFee: commission,
    });

    await seller_inst.save(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
}

module.exports = Seller;
