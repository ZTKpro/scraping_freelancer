const CV = require("../temp/cv");

const message = (ofertText) => {
  const prompt =
    "Wobraż sobie się jesteś najlepszym sprzedawca na swięcie i  Napisz wiadomość Do maksymalnie 1000 znaków. przestawiająco przystosowaną do podanej oferty, Pisz nieformalnie, Skup się dużo bardziej na tym aby w wiadomości napisz jakie korzyści możesz przynieść dla pracodawcy. Bazuj na CV w 20%. Zwróć wiadomość w formie do skopiowania. W języku angielskim oraz polskim Umieść w wiadomości linki: https://ds3d.netlify.app";

  return `${prompt} CV: ${CV} Oferta: ${ofertText}`;
};

module.exports = message;
