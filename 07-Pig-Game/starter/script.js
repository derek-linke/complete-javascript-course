'use strict';

const randNumber = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnReset = document.querySelector('.btn--hold');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const player = document.querySelector('.player');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

let score0Val = 0;
let score1Val = 0;

score0.textContent = 0;
score1.textContent = 0;

btnRoll.addEventListener('click', function () {
  let diceNumber = randNumber();

  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;

  if (!(diceNumber === 1)) {
    if (
      player.classList.contains('player--0') &&
      player.classList.contains('player--active')
    ) {
      score0Val += diceNumber;
      currentScore0.textContent = score0Val;
    } else {
      score1Val += diceNumber;
      currentScore1.textContent = score1Val;
    }
  } else {
    if (
      player.classList.contains('player--0') &&
      player.classList.contains('player--active')
    ) {
      score0Val = 0;
      score0.textContent = score0Val;
      currentScore0.textContent = score0Val;
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
    } else {
      score1Val = 0;
      score1.textContent = score1Val;
      currentScore1.textContent = score1Val;
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
    }
  }
});

btn;
