const inquirer = require("inquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../util/validation");

const key = {
  async set() {
    const keyManag = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message:
          "Enter your API key ".green +
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC",
        validate: isRequired,
      },
    ]);
    const key = keyManag.setKey(input.key);
    if (key) {
      console.log("API key set successfully".blue);
    } else {
      console.log("Failed to set API key".red);
    }
  },
  show() {
    const keyManag = new KeyManager();
    try {
      const key = keyManag.getKey();
      console.log("API key: ".blue + key);
      return key;
    } catch (error) {
      console.log(error.message.red);
    }
  },
  remove: () => {
    console.log("Remove API keys");
  },
};

module.exports = key;
