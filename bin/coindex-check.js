const { Command } = require("commander");
const program = new Command();
const check = require("../command/check");

program
  .name("coindex-check")
  .command("price")
  .description("Check price")
  .action(() => check.price());

program.parse(process.argv);
