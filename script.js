let poem =
  "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

let timeEl = document.querySelector(".time");
let mainEl = document.getElementById("main");
let textEl = document.querySelector(".text");
document.getElementById("startBtn").addEventListener("click", prepareRead);

function prepareRead() {
  let secondsLeft = 6;
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds until Speed Reader beings.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      speedRead();
    }
  }, 100);
}

wordIndex = 0;
function speedRead() {
  let textArea = document.getElementById("text-area").value;
  timeEl.textContent = " ";
  let res = textArea.split(" ");

  let wordInterval = setInterval(function () {
    wordIndex++;
    textEl.textContent = res[wordIndex];

    if (wordIndex == res.length) {
      clearInterval(wordInterval);
    }
  }, 1000);
}
