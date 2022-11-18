const haris = "Haris";
const john = "john";
const peter = "peter";
module.exports = { haris, john, peter };
module.exports.items = ["item 1", "item 2"];
const os = require("os");
console.log(`System Uptime ${os.uptime()}`);
console.log("User Info : ", os.userInfo());
