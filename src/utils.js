import convert from "color-convert";
//3. Fonction de génération de palette
export function generatePalette(colorhex) {
  const palette = [];
  //Transforme la couleur hexa en hsl
  const hsl = convert.hex.hsl(colorhex);

  for (let i = 0; i <= 100; i += 10) {
    palette.push([hsl[0], hsl[1], i]);
  }
  return palette;
}

export function generateHexadecimalColor(colorEnHSL) {
  return convert.hsl.hex(colorEnHSL);
}

export function changeHexToHsl(color) {
  const hsl = convert.hex.hsl(color);
  return `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;
}
