const { Command } = require("commander");
const program = new Command();

program
  .name("coindex-check")
  .command("price")
  .description("Check price")
  .action(() => {
    console.log("Check price");
  });

program.parse(process.argv);
