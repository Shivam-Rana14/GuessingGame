"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let currHighScore = 0;
document.querySelector(".score_value").textContent = score;
document.querySelector(".check_btn").addEventListener("click", function () {
  const guess = document.querySelector(".num").value;
  console.log(guess);

  if (!guess) {
    console.log(
      (document.querySelector(".status").textContent = "⛔ No Number")
    );
  } else if (guess == secretNumber) {
    document.querySelector(".status").textContent = "🎉 Correct Answer";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;

    if (currHighScore < score) {
      document.querySelector(".high_score").textContent = score;
    }
    score = 20;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".status").textContent = "📈 Too High";
      score--;
      document.querySelector(".score_value").textContent = score;
    } else {
      document.querySelector(".status").textContent = "You Lost !";
      document.querySelector(".score_value").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".status").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score_value").textContent = score;
    } else {
      document.querySelector(".status").textContent = "You Lost !";
      document.querySelector(".score_value").textContent = 0;
    }
  }
});

document.querySelector(".again_btn").addEventListener("click", function () {
  let score = 20;
  document.querySelector(".score_value").textContent = score;
  document.querySelector("body").style.backgroundColor = "#000000da";
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".num").value = " ";
});
