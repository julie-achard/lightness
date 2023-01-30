import convert from "color-convert";

export function generatePalette(colorhex) {
  const tabColor = [];
  const hsl = convert.hex.hsl(colorhex);

  for (let i = 0; i <= 100; i += 10) {
    tabColor.push([hsl[0], hsl[1], i]);
  }
  return tabColor;
}

export function generateHexa(colorhsl) {
  return convert.hsl.hex(colorhsl);
}
