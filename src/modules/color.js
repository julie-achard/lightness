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
    //Changement de la couleur du texte de l'élément
    if (this.#hsl[2] > 50) {
      this.#textColor = "#000000";
    } else {
      this.#textColor = "#ffffff";
    }
    //Changement de la couleur de fond de l'élément
    this.#element = `<div class="color" data-color="#${
      this.hex
    }" style="background-color: #${this.hex}">
        <p style="color: #${this.#textColor}">#${this.hex}</p>
    </div>`;
  }

  display(element) {
    element.insertAdjacentHTML("beforeend", this.#element);
  }
}

export default Color;
