const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/CryptoAPI");

const check = {
  async price(cmd) {
    try {
      keyMan = new KeyManager();
      const key = keyMan.getKey();
      const api = new CryptoAPI(key);
      const priceData = await api.getPriceData(cmd.coin, cmd.currency);
      console.log(priceData);
    } catch (error) {
      console.error("Error fetching price data:", error.message);
    }
  },
};

module.exports = check;
