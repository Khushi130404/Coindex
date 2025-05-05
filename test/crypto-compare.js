const axios = require("axios");

const apiKey =
  "f93be977060938f7d4916591fd6bb6d9ea494de8f09677b7b4e3a1fddbaab654";
const url =
  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,SOL&tsyms=USD,INR,EUR";

axios
  .get(url, {
    headers: {
      authorization: `Apikey ${apiKey}`,
    },
  })
  .then((res) => {
    const data = res.data;
    console.log("💰 Current Prices:");
    console.log(`1 BTC: ₹${data.BTC.INR}, $${data.BTC.USD}, €${data.BTC.EUR}`);
    console.log(`1 ETH: ₹${data.ETH.INR}, $${data.ETH.USD}, €${data.ETH.EUR}`);
    console.log(`1 SOL: ₹${data.SOL.INR}, $${data.SOL.USD}, €${data.SOL.EUR}`);
  })
  .catch((err) => {
    console.error(
      `Error: ${err.response?.status} - ${
        err.response?.data?.Message || err.message
      }`
    );
  });
