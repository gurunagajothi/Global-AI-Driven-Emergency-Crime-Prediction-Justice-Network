const protocols = require("./protocols.json");

function routeToUN(type) {
  const protocol = protocols[type];
  console.log("🇺🇳 UN PROTOCOL ACTIVATED");
  console.log(protocol);
}

module.exports = routeToUN;
