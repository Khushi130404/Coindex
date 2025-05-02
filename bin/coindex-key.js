const { Command } = require("commander");
const program = new Command();

program
  .name("coindex-key")
  .command("set")
  .description("Manage API keys")
  .action(() => {
    console.log("Manage API keys");
  });

program.parse(process.argv);
