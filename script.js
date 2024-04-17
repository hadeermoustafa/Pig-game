"use strict";

//select emlements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");

//setting score ;
const scores = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
let score = 0;
let activePlayer = 0;

//switching players

function switchingPlayers() {
  // switch player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  score = 0;
  //change active or idel style
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

//Rolling dice

btnRoll.addEventListener("click", function () {
  // Generating a random number
  const random = Math.trunc(Math.random() * 6) + 1;

  //display dice
  dice.classList.remove("hidden");
  dice.src = `dice-${random}.png`;

  // check if 1 is rolled
  if (random !== 1) {
    // add current number to score
    score += random;
    console.log(score);
    document.getElementById(`current--${activePlayer}`).textContent = score;
  } else {
    switchingPlayers();
  }
});

btnHold.addEventListener("click", function () {
  //add score to active player score
  scores[activePlayer] += score;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //change active or idel style
  switchingPlayers();
});
