

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
const colorText = document.querySelector('.color')


changeColorButton.addEventListener('click', e => {
  let colorRandom = getRandomHexColor();
  bodyEl.style.backgroundColor = colorRandom;
  colorText.textContent = colorRandom;
})