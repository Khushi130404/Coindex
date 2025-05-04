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
          "https://console.coinapi.io/team/94b7566e-a8b2-4c59-a1d5-fe693fd42c02/apikeys/create",
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
  remove() {
    const keyManag = new KeyManager();
    try {
      keyManag.removeKey();
      console.log("API key removed successfully".blue);
    } catch (error) {
      console.log(error.message.red);
    }
  },
};

module.exports = key;
