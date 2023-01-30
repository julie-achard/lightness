"use strict";
import { generatePalette, changeHexToHsl } from "./utils.js";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import Color from "./modules/color.js";

const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const headerElement = document.querySelector("header");

const color = new Color(5, 32, 50);
//4. Gérer l'entrée de l'utilisateur
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const entry = inputElement.value;
  if (/^#[0-9A-F]{6}$/i.test(entry)) {
    const palette = generatePalette(entry);
    displayColors(palette);
  } else {
    notyf.error(`${entry} is not a valid hexa color code`);
  }
});

function displayColors(palette) {
  //6. Créer des instances de Color
  const tabColor = [];
  palette.forEach((couleur) => {
    tabColor.push(new Color(couleur));
  });
  //7. Modifier l'interface
  //Affichage du conatiner
  headerElement.classList.add("minimized");
  //Reset du container
  document.querySelector("main").innerHTML = "";
  //Couleur du dégradé avec linear-gradient(palette[début], palette[milieu], palette[fin])$
  document.body.style.background = `linear-gradient(-45deg , #${tabColor[0].hex}, #${tabColor[5].hex}, #${tabColor[9].hex})`;
  document.body.style.backgroundSize = "400% 400%";
  //Ombre du container
  document.documentElement.style.setProperty(
    "--shadow-color",
    changeHexToHsl(inputElement.value)
  );
}
