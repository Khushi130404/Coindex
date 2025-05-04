const { Command } = require("commander");
const program = new Command();
const check = require("../command/check");

program
  .name("coindex-check")
  .command("price")
  .description("Check price")
  .option("--coin <type>", "Add Type of coin", "BTC,ETH,SOL,XRP,BNB,USDT")
  .option("--currency <type>", "Add Type of currency", "USD,INR,EUR,CAN,AUD,CNY")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
