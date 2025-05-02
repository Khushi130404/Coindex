console.log("Hello Coindex!");

const { Command } = require("commander");
const program = new Command();
const pkg = require("../package.json");

program
  .name("coindex")
  .version(pkg.version)
  .command("key", "Manage API keys")
  .description("CLI to get cryptocurrency prices")
  .parse(process.argv);
