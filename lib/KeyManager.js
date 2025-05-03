const configStore = require("/configStore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.config = configStore(pkg.name);
  }

  setKey(key) {
    this.config.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.config.get("apiKey");

    if (!key) {
      throw new Error(
        "API key not found. Please set it using the set command."
      );
    }
    return key;
  }

  removeKey() {
    const key = this.config.get("apiKey");
    if (!key) {
      throw new Error("No API key to delete.");
    }
    this.config.delete("apiKey");
    return;
  }
}

module.exports = KeyManager;
