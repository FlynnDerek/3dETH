var axios = require("axios");

exports.getEthPrice = async () => {
  try {
    const response = await axios.get(
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};
