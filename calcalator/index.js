"use strict"
function init () {
    const addButton = document.getElementById("addButton");
    const subButton = document.getElementById("subButton");
    const multiplyButton = document.getElementById("multiplyButton");
    const divideButton = document.getElementById("divideButton")

    addButton.onclick = addCalculation;
    subButton.onclick = subtractCalculation;
    multiplyButton.onclick = multiplyCalculation;
    divideButton.onclick = divideCalculation;
}
window.onload = init;

function addCalculation() {
    const numberOne = Number(document.getElementById("numberOne").value);
    const numberTwo = Number(document.getElementById("numberTwo").value);
    let answerInput = document.getElementById("answerInput");

    let result = numberOne + numberTwo;

    answerInput.value = result;
}

function subtractCalculation() {
    const numberOne = document.getElementById("numberOne").value;
    const numberTwo = document.getElementById("numberTwo").value;

    let result = Number(numberOne) - Number(numberTwo);
    let answerInput = document.getElementById("answerInput");
    answerInput.value = result;
}

function multiplyCalculation() {
    const numberOne = document.getElementById("numberOne").value;
    const numberTwo = document.getElementById("numberTwo").value;

    let result = Number(numberOne) * Number(numberTwo);
    let answerInput = document.getElementById("answerInput");
    answerInput.value = result;
}

function divideCalculation() {
  const numberOne = document.getElementById("numberOne").value;
  const numberTwo = document.getElementById("numberTwo").value;

  let result = Number(numberOne) / Number(numberTwo);
  let answerInput = document.getElementById("answerInput");
  answerInput.value = result;
}