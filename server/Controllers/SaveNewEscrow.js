var mongoose = require("mongoose");
require("../models/Escrow.js");

var EscrowInstance = mongoose.model("Escrow");

class SaveNewEscrow {
    async saveNewEscrow(sellerAddress, buyerAddress, price, shippingAddress, download)
        {

        let escrow_inst = new EscrowInstance({
            _sellerWallet: sellerAddress,
            _buyerWallet: buyerAddress,
            _printCost: price,
            _buyerShippingAddress: shippingAddress,
            _printDL: download,
          });
       
          await escrow_inst.save(function(err,result){
          if (err){
              console.log(err);
          }
          else{
             console.log(result)
          }
      })
    }
}

module.exports = SaveNewEscrow;

