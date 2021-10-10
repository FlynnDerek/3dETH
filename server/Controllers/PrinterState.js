const axios = require("axios");
var authtoken = "00CFB93E1A2D44908245226A1A56907F";

const instance = axios.create({
  baseURL: "http://192.168.1.77/api/",
  timeout: 5000,
  headers: {
    Authorization: "Bearer 00CFB93E1A2D44908245226A1A56907F",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

class PrinterState {
  async getPrinterState() {
    var data;
    await instance
      .get("/printer")
      .then((response) => {
        data = response.data;
      })
      .catch((err) => {
        return err;
      });
    return data;
  }
}

module.exports = PrinterState;
