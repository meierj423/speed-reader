let timeEl = document.querySelector(".time");
let textEl = document.querySelector(".text");
document.getElementById("startBtn").addEventListener("click", prepareRead);

let millisecondsPerWord = prompt(
  "How many milliseconds between words would you like?"
);
millisecondsPerWord = parseInt(millisecondsPerWord); // convert string to number

function prepareRead() {
  let secondsLeft = 5;
  let timerInterval = setInterval(function () {
    timeEl.textContent = secondsLeft + " seconds until Speed Reader beings...";
    secondsLeft--;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      speedRead();
    }
  }, 1000);
}

wordIndex = 0;
function speedRead() {
  let textArea = document.getElementById("text-area").value;
  console.log(textArea);
  timeEl.textContent = " ";
  let res = textArea.split(" ");

  let wordInterval = setInterval(function () {
    textEl.textContent = res[wordIndex];
    wordIndex++;

    if (wordIndex == res.length) {
      clearInterval(wordInterval);
    }
  }, millisecondsPerWord);
}
