const BOX_COLOR = document.getElementById("color-box");
const CHANGE_COLOR = document.getElementById("change-color-btn");

function getRandomColor(params) {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  BOX_COLOR.style.backgroundColor = color;
}

CHANGE_COLOR.addEventListener("click", getRandomColor);
