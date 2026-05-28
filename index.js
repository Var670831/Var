// script.js

const heartsContainer = document.querySelector(".hearts-container");

const surpriseBtn = document.getElementById("surpriseBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

/* Flying Hearts */

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");

  const heartSymbols = ["❤️", "💖", "💕", "💘", "💗"];

  heart.innerHTML =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 25 + 20 + "px";

  /* Transition Speed upto 0.8s variation */

  heart.style.animationDuration = Math.random() * 0.8 + 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

/* Continuous Hearts */

setInterval(createHeart, 120);

/* Surprise Button */

surpriseBtn.addEventListener("click", () => {
  /* Hide First Page */
  page1.classList.remove("active");

  /* Show Second Page */
  setTimeout(() => {
    page2.classList.add("active");
  }, 300);
});
