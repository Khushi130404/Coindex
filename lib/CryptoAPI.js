const axios = require("axios");
const colors = require("colors");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://min-api.cryptocompare.com/data/pricemulti?";
  }

  async getPriceData(coin, currency) {
    try {
      const url = `${this.baseUrl}fsyms=${coin}&tsyms=${currency}`;
      const res = await axios.get(url, {
        headers: {
          authorization: `Apikey ${this.apiKey}`,
        },
      });

      const formatter = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency,
      });

      let output = `💰 Current Prices for ${coin}:\n`;
      const priceObj = res.data[coin];

      for (const [cur, price] of Object.entries(priceObj)) {
        output += `1 ${coin.grey} = ${price.toString().blue} ${
          formatter.format(cur).green
        }\n`;
      }
      return output;
    } catch (error) {
      console.error(colors.red("Error fetching price data:", error.message));
      throw error;
    }
  }
}

module.exports = CryptoAPI;
