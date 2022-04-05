"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".chckbtn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   When there is no input
  if (!guess) {
    document.querySelector(".font-size-guess").textContent = "No Number!❗";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".font-size-guess").textContent =
      "Correct Number!👍";
    document.querySelector(".fntsize").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector(".font-size-guess").textContent =
        guess > secretNumber ? "Too High!" : "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".font-size-guess").textContent =
        "You lost the game😥🙁";
      document.querySelector(".score").textContent = 0;
    }
  }
  // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".font-size-guess").textContent = "Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".font-size-guess").textContent =
  //       "You lost the game😥🙁";
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".font-size-guess").textContent = "Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".font-size-guess").textContent =
  //       "You lost the game😥🙁";
  //   }
  // }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".font-size-guess").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".fntsize").textContent = "?";
  document.querySelector(".guess").value = "";
});
