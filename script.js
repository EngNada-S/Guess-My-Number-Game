'use strict';

const randomNumberInRange = (from, to) => Math.trunc(Math.random() * (to - from + 1)) + from;
const displayMessage=message => document.querySelector('.message').textContent=message;
const updateScore = score => document.querySelector('.score').textContent = score;
const updateUI = (bgColor, numberWidth, numberValue) => {
  document.body.style.background = bgColor;
  document.querySelector('.number').style.width = numberWidth;
  document.querySelector('.number').textContent = numberValue;
};


let secretNumber =randomNumberInRange(1,20);
let score = 20;
let highScore=0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    updateUI('#60b347','30rem',secretNumber);

    if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess> secretNumber?'📈 Too high!':'📉 Too low!');
      score--;
      updateScore(score);
    } else {
      updateScore(0);
      displayMessage('💥 You lost the game!');
      updateUI('#e63946','30rem',secretNumber);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  secretNumber =randomNumberInRange(1,20);
  score = 20;
  updateScore(score);

  document.querySelector('.guess').value = '';
  updateUI('#222','15rem','?');
});
