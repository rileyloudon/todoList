const randomColor = () => {
  // https://css-tricks.com/converting-color-spaces-in-javascript/

  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));

  const r = randomBetween(50, 255);
  const g = randomBetween(50, 255);
  const b = randomBetween(50, 255);

  function RGBToHex(red, green, blue) {
    let redString = red.toString(16);
    let greenString = green.toString(16);
    let blueString = blue.toString(16);

    if (redString.length === 1) redString = `0${r}`;
    if (greenString.length === 1) greenString = `0${g}`;
    if (blueString.length === 1) blueString = `0${b}`;

    return redString + greenString + blueString;
  }
  return RGBToHex(r, g, b);
};

export default randomColor;
