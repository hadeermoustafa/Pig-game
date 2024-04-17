"use strict";

//select emlements

const score1 = document.getElementById("score--0");
const score2 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");

//setting score ;
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add("hidden");
let score = 0;

//Rolling dice

btnRoll.addEventListener("click", function () {
  // Generating a random number
  let random = Math.trunc(Math.random() * 6) + 1;

  //display dice
  dice.classList.remove("hidden");
  dice.src = `dice-${random}.png`;

  // check if 1 is rolled
  if (random !== 1) {
    // add current number to score
    score += random;
    currentScore0.textContent = score;
  } else {
    // switch player
  }
});
