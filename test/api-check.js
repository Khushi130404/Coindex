const axios = require("axios");

const url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=inr,usd,eur";

axios
  .get(url)
  .then((response) => {
    const data = response.data;

    console.log("💰 Current Prices:");
    console.log(
      `1 BTC = ₹${data.bitcoin.inr}, $${data.bitcoin.usd}, €${data.bitcoin.eur}`
    );
    console.log(
      `1 ETH = ₹${data.ethereum.inr}, $${data.ethereum.usd}, €${data.ethereum.eur}`
    );
    console.log(
      `1 SOL = ₹${data.solana.inr}, $${data.solana.usd}, €${data.solana.eur}`
    );
  })
  .catch((error) => {
    console.error(
      `Error: ${error.response?.status} - ${
        error.response?.data?.error || error.message
      }`
    );
  });
