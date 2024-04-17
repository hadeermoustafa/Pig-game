"use strict";

//select emlements

const score1 = document.getElementById("score--0");
const score2 = document.getElementById("score--1");
const dice = document.querySelector(".dice");

//setting score to 0;
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add("hidden");
