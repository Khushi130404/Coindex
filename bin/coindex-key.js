const { Command } = require("commander");
const key = require("../command/key");
const program = new Command();

program
  .name("coindex-key")
  .command("set")
  .description("Set API keys")
  .action(key.set);

program
  .name("coindex-key")
  .command("show")
  .description("Show API keys")
  .action(key.show);

program
  .name("coindex-key")
  .command("remove")
  .description("Remove API keys")
  .action(key.remove);

program.parse(process.argv);
