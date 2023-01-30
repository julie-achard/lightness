"use strict";
import { generatePalette } from "./utils.js";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import Color from "./modules/color.js";

const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const color = new Color(5, 32, 50);
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
