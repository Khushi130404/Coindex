const { Command } = require("commander");
const program = new Command();
const check = require("../command/check");

program
  .name("coindex-check")
  .command("price")
  .description("Check price")
  .option("--coin <type>", "Add Type of coin", "BTC,ETH,XRP")
  .option("--currency <type>", "Add Type of currency", "USD,EUR,GBP")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
