let poem =
  "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

let timeEl = document.querySelector(".time");
let mainEl = document.getElementById("main");

let secondsLeft = 6;

function prepareRead() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds until Speed Reader beings.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      showColorExplosion();
    }
  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.
}

prepareRead();
