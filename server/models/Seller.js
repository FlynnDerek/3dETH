let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let sellerSchema = new Schema({

  // seller info
  _sellerAddress: { required: true, type: Schema.Types.String },
  _sellerEmail: { required: true, type: Schema.Types.String },
  _sellerDescription: { required: true, type: Schema.Types.String },
  _sellerRating: { required: true, type: Schema.Types.Number },
  _sellerActive: { required: true, type: Schema.Types.String },

  //printer info
  _printerModel: { required: true, type: Schema.Types.String },
  _printerMaterial: { required: true, type: Schema.Types.String },
  _spoolColor: { required: false, type: Schema.Types.String },
  _printerWidth: { required: true, type: Schema.Types.Number },
  _printerLength: { required: true, type: Schema.Types.Number },
  _printerHeight: { required: true, type: Schema.Types.Number },
  _autoBedLevel: { required: true, type: Schema.Types.Boolean },
  _printerEndpoint: { required: true, type: Schema.Types.String },
  _printerBearerToken: { required: true, type: Schema.Types.String },

  //pricing info
  _pricingSmall: { required: true, type: Schema.Types.Number },
  _pricingMedium: { required: true, type: Schema.Types.Number },
  _pricingLarge: { required: true, type: Schema.Types.Number },
  _shippingSmall: { required: true, type: Schema.Types.Number },
  _shippingMedium: { required: true, type: Schema.Types.Number },
  _shippingLarge: { required: true, type: Schema.Types.Number },
  _commissionFee: { required: true, type: Schema.Types.Number },
});

module.exports = mongoose.model("Seller", sellerSchema);