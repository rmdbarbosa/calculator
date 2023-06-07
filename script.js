const operatorButton = document.querySelectorAll(".operator");
const numberButton = document.querySelectorAll(".number");
const currentNum = document.querySelector(".current-num");
const equalsKey = document.querySelector("#equal");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const pointButton = document.getElementById("point");

pointButton.addEventListener("click", appendPoint);
deleteButton.addEventListener("click", deleteNumber);

function deleteNumber() {
  currentNum.textContent = currentNum.textContent.toString().slice(0, -1);
  storedNumber = currentNum.textContent;
}

function appendPoint() {
  if (currentNum.textContent === "" || storedNumber === "")
    (currentNum.textContent = "0"), (storedNumber = "0");

  if (currentNum.textContent.includes(".")) return;
  (currentNum.textContent += "."), (storedNumber += ".");
}

currentNum.textContent = " ";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let num1 = 0;
let num2 = 0;
let operator = "";

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
currentNum.textContent = 0;

numberButton.forEach((number) => {
  number.addEventListener("click", function () {
    storedNumber += number.value;
    currentNum.textContent = storedNumber;
  });
});

operatorButton.forEach((operator) => {
  operator.addEventListener("click", function () {
    firstNumber = storedNumber;

    clickedOperator = operator.textContent;

    storedNumber = "";
  });
});

equalsKey.addEventListener("click", function () {
  result = roundResult(
    operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
  );

  currentNum.textContent = result;

  storedNumber = result;
});

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

clearButton.addEventListener("click", function () {
  location.reload();
});
