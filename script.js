console.log("script loaded");
let firstNumber = "";
let operator = "";
let secondNumber = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
	button.addEventListener("click", (button) => {});
});

function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}
function operate(operator, firsNumber, secondNumber) {
	if (operator == "+") {
		add(firsNumber, secondNumber);
	}
	if (operator == "-") {
		subtract(firsNumber, secondNumber);
	}
	if (operator == "*") {
		multiply(firsNumber, secondNumber);
	}
	if (operator == "/") {
		divide(firsNumber, secondNumber);
	}
}
