const axios = require("axios");

const url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr";

axios
  .get(url)
  .then((response) => {
    const rate = response.data.bitcoin.inr;
    console.log(`1 BTC = ₹${rate}`);
  })
  .catch((error) => {
    console.error(
      `Error: ${error.response?.status} - ${
        error.response?.data?.error || error.message
      }`
    );
  });
