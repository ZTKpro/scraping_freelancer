const compressText = (text) =>
  text.replace(/\n/g, "").replace(/\s+/g, " ").trim();

module.exports = compressText;
