console.log("Hello Coindex!");

const { Command } = require("commander");
const program = new Command();
const pkg = require("../package.json");

program
  .name("coindex")
  .version(pkg.version)
  .description("CLI to get cryptocurrency prices")
  .command('key','Manage API keys')
  .parse(process.argv);
