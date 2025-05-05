const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/CryptoAPI");

const check = {
  async price(cmd) {
    try {
      keyMan = new KeyManager();
      const key = keyMan.getKey();
      console.log("Using API key:", key);
      if (!key) {
        console.error("API key not found. Please set it up first.");
        return;
      }
      const api = new CryptoAPI(key);
      console.log("Checking price...");
      const priceData = await api.getPriceData(cmd.coin, cmd.currency);
      console.log(priceData);
    } catch (error) {
      console.error("Error fetching price data:", error.message);
    }
  },
};

module.exports = check;
