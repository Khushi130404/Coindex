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
      let output = "💰 Current Prices:\n";
      res.data[coin].forEach((price, index) => {
        output += `1 ${coin} = ${price} ${currency[index]}\n`;
      });
      console.log(colors.green(output));
      return output;
    } catch (error) {
      console.error(colors.red("Error fetching price data:", error.message));
      throw error;
    }
  }
}
