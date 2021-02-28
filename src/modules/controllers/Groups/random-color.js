const randomColor = () => {
  // https://css-tricks.com/converting-color-spaces-in-javascript/

  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));

  const r = randomBetween(50, 255);
  const g = randomBetween(50, 255);
  const b = randomBetween(50, 255);

  function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;

    return r + g + b;
  }
  return RGBToHex(r, g, b);
};

export default randomColor;
