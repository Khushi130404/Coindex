const axios = require("axios");

const url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd,eur";

axios
  .get(url)
  .then((response) => {
    const rates = response.data.bitcoin;
    console.log(`1 BTC = ₹${rates.inr} (INR)`);
    console.log(`1 BTC = $${rates.usd} (USD)`);
    console.log(`1 BTC = €${rates.eur} (EUR)`);
  })
  .catch((error) => {
    console.error(
      `Error: ${error.response?.status} - ${
        error.response?.data?.error || error.message
      }`
    );
  });
