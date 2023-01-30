import { generateHexadecimalColor } from "../utils";
//5. Module Color.js
class Color {
  //Propriétés
  #hsl;
  #hex;
  #element;
  constructor([h, s, l]) {
    //couleur en hsl
    this.#hsl = [h, s, l];
    //couleur en hexadecimal
    this.#hex = generateHexadecimalColor(this.#hsl);
    this.#element = this.#generateElement();
  }
  //Méthodes
  #generateElement() {
    //Changement de la couleur de fond de l'élément
    this.#element = `<div class="color" data-color="#${
      this.#hex
    }" style="background-color:#${this.#hex}"> </div>`;
    //Changement de la couleur du texte de l'élément
  }

  display(element) {}
}

export default Color;
