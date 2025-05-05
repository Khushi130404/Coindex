const axios = require("axios");
const colors = require("colors");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://min-api.cryptocompare.com/data/pricemulti?";
  }

  async getPriceData(coins, currencies) {
    try {
      // Remove square brackets if present and split into arrays (support for passing square brackets in input)
      if (typeof coins === "string") {
        coins = coins.replace(/[[\]']+/g, "").split(",");
      }
      if (typeof currencies === "string") {
        currencies = currencies.replace(/[[\]']+/g, "").split(",");
      }

      // Format the coin and currency parameters for the API URL
      const coinsParam = coins.join(",");
      const currenciesParam = currencies.join(",");

      const url = `${this.baseUrl}fsyms=${coinsParam}&tsyms=${currenciesParam}`;
      const res = await axios.get(url, {
        headers: {
          authorization: `Apikey ${this.apiKey}`,
        },
      });

      let output = `💰 Current Prices:\n`;

      // Iterate over each coin and its prices for different currencies
      coins.forEach((coin) => {
        const priceObj = res.data[coin];

        // Ensure that priceObj exists for the coin
        if (!priceObj) {
          output += `No data available for coin: ${coin}\n`;
          return;
        }

        currencies.forEach((currency) => {
          const price = priceObj[currency];
          if (price !== undefined) {
            const formatter = new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: currency,
            });

            output += `1 ${coin.grey} = ${formatter.format(price).blue} ${
              currency.green
            }\n`;
          } else {
            output += `No data available for ${coin} in ${currency}\n`;
          }
        });
      });

      console.log(colors.green(output));
      return output;
    } catch (error) {
      console.error(colors.red("Error fetching price data:", error.message));
      throw error;
    }
  }
}

module.exports = CryptoAPI;
