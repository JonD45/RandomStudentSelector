import "./style.css";
import data from "./db";
const button = document.querySelector("button");
const nameDisplay = document.querySelector("p");
button.addEventListener("click", () => {
  nameDisplay.textContent =
    data[getRandomIntInclusive(0, data.length - 1)].name;
});
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
