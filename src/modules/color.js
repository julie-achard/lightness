import { generateHexa } from "../utils";

class Color {
  #hsl;
  #element;
  constructor([h, s, l]) {
    this.#hsl = [h, s, l];
    this.#hex = generateHexa(this.#hsl);
  }
}
export default Color;
