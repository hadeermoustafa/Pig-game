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

let score, activePlayer, gameIsOn, scores;

function start() {
  //setting score ;

  score0.textContent = 0;
  score1.textContent = 0;
  scores = [0, 0];
  score = 0;
  activePlayer = 0;
  gameIsOn = true;
  currentScore0.textContent = 0;
  currentScore0.textContent = 0;

  dice.classList.add("hidden");
  document.querySelector(".player--0").classList.add("player--active");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
}
start();
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
  if (gameIsOn) {
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
  }
});

btnHold.addEventListener("click", function () {
  if (gameIsOn) {
    //add score to active player score
    scores[activePlayer] += score;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      //finish the game and announce winner
      gameIsOn = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //change active or idel style
      switchingPlayers();
    }
  }
});

btnNew.addEventListener("click", start);
