let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let escrowSchema = new Schema({
  _sellerWallet: { required: true, type: Schema.Types.String },
  _buyerWallet: { required: true, type: Schema.Types.String },
  _printCost: { required: true, type: Schema.Types.Number },
  _buyerShippingAddress: { required: true, type: Schema.Types.String },
  _printDL: { required: true, type: Schema.Types.String },
});

module.exports = mongoose.model("Escrow", escrowSchema);
