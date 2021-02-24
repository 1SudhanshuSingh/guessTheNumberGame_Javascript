"use strict";
window.onload = () => {
  const app = {
    checkNumber: document.querySelector(".check-number"),
    inputNumber: document.querySelector(".number-input"),
    resultText: document.querySelector(".result-container"),
    countMoves: document.querySelector(".moves"),
    playAgain: document.querySelector(".play-again"),
    helpBtn: document.querySelector(".help-btn"),
    helpTxtArea: document.querySelector(".help-text"),
    highScore: document.querySelector(".high-score")
  };

  let counter = 0;
  let finalCounter = 0;
  const randomNo = (function() {
    return Math.trunc(Math.random() * 20) + 1;
  })();
  const resetFields = () => {
    app.resultText.textContent = "";
    app.inputNumber.value = "";
    app.helpTxtArea.textContent = "";
    app.countMoves.textContent = 0;
  };
  const compareNo = inputNo => {
    if (inputNo < randomNo) {
      app.resultText.textContent = "Number is Low";
    } else if (inputNo > randomNo) {
      app.resultText.textContent = "Number is High";
    } else {
      app.resultText.textContent = "You Win";
      finalCounter = counter;
      app.highScore.textContent = finalCounter;
      alert("YAY! You Won. Thanks for playing");
      resetFields();
    }
  };
  const checkInpNo = inputNo =>
    inputNo > 20 ? alert("Number should be between 1 & 20") : null;
  const getHelp = () => {
    return randomNo >= 1 && randomNo <= 10
      ? (app.helpTxtArea.textContent = "Number is between 1 - 10")
      : (app.helpTxtArea.textContent = "Number is between 10 - 20");
  };
  app.checkNumber.onclick = inputNo => {
    inputNo = app.inputNumber.value;
    if (inputNo !== "") {
      counter++;
      compareNo(inputNo);
      checkInpNo(inputNo);
      app.countMoves.textContent = counter;
    } else {
      alert("Enter a number :)");
    }
  };
  app.playAgain.onclick = () => resetFields();
  app.helpBtn.onclick = () => getHelp();
};
