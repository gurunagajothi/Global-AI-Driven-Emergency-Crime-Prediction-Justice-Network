module.exports = function(country) {
  const map = {
    IN: "112",
    US: "911",
    UK: "999",
    EU: "112"
  };
  return map[country] || "112";
};
