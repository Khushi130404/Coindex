const axios = require("axios");
const colors = require("colors");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://min-api.cryptocompare.com/data/pricemulti?";
  }

  async getPriceData(coins, currencies) {
    try {
      if (typeof coins === "string") {
        coins = coins.replace(/[[\]']+/g, "").split(",");
      }
      if (typeof currencies === "string") {
        currencies = currencies.replace(/[[\]']+/g, "").split(",");
      }

      const coinsParam = coins.join(",");
      const currenciesParam = currencies.join(",");

      const url = `${this.baseUrl}fsyms=${coinsParam}&tsyms=${currenciesParam}`;
      const res = await axios.get(url, {
        headers: {
          authorization: `Apikey ${this.apiKey}`,
        },
      });

      let output = `💰 Current Prices:\n`;

      coins.forEach((coin) => {
        const priceObj = res.data[coin];

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
      return output;
    } catch (error) {
      console.error(colors.red("Error fetching price data:", error.message));
      handleError(error);
    }
  }
}

function handleError(error) {
  if (error.response.status === 401) {
    throw new Error("Invalid API key. Please check your API key.");
  } else if (error.response.status === 404) {
    throw new Error("Invalid endpoint. Please check the URL.");
  } else {
    throw new Error("An unexpected error occurred. Please try again.");
  }
}

module.exports = CryptoAPI;
