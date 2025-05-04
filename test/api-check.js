const axios = require("axios");

const apiKey = "f841b82f-169d-4d02-bb51-75f1a0c075fb"; // Replace with your actual key
const url = "https://rest.coinapi.io/v1/exchangerate/BTC/USD";

axios
  .get(url, {
    headers: {
      "X-CoinAPI-Key": apiKey,
    },
  })
  .then((response) => {
    console.log(`1 BTC = ${response.data.rate} USD`);
  })
  .catch((error) => {
    console.error(
      `Error: ${error.response?.status} - ${
        error.response?.data?.error || error.message
      }`
    );
  });
