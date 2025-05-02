const { Command } = require("commander");
const program = new Command();

program
  .name("coindex-key")
  .command("set")
  .description("Set API keys")
  .action(() => {
    console.log("Set API keys");
  });

program
  .name("coindex-key")
  .command("show")
  .description("Show API keys")
  .action(() => {
    console.log("Show API keys");
  });


program.parse(process.argv);
