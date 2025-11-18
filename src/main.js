import "./style.css";
import data from "./db";
const button = document.querySelector("button");
const nameDisplay = document.querySelector("p");
const darkModeRadio = document.querySelector("#dark");
const lightModeRadio = document.querySelector("#light");

button.addEventListener("click", () => {
  nameDisplay.textContent =
    data[getRandomIntInclusive(0, data.length - 1)].name;
});
darkModeRadio.addEventListener("change", () => {
  document.body.classList.add("bg-gray-800", "text-white");
  document.body.classList.remove("bg-gray-100");
});
lightModeRadio.addEventListener("change", () => {
  document.body.classList.add("bg-gray-100");
  document.body.classList.remove("bg-gray-800", "text-white");
});
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
