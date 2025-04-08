'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value)=23;
console.log(document.querySelector('.guess').value);*/

const ranNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = ranNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessVal = Number(document.querySelector('.guess').value);

  if (!guessVal) {
    document.querySelector('.message').textContent = 'No number entered!';
  } else if (guessVal < 1 || guessVal > 20) {
    document.querySelector('.message').textContent =
      'Enter a number between  1 and 20';
  } else if (guessVal === secretNumber) {
    document.querySelector('.message').textContent =
      'You have guessed the secret numnber!';
    document.querySelector('.highscore').textContent = String(highScore);
  } else if (guessVal < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      highScore = score;
      document.querySelector('.message').textContent =
        'Guess number is too low!';
    } else {
      document.querySelector('.message').textContent = 'You have lost the game';
    }
  } else if (guessVal > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      highScore = score;
      document.querySelector('.message').textContent =
        'Guess number is too high!';
    } else {
      document.querySelector('.message').textContent = 'You have lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = ranNumber();
  document.querySelector('.guess').value = '';
});
