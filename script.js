console.log("script loaded");
let firstNumber = "";
let secondNumber = "";
let displayValue = "";
let operator;

const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");

buttons.forEach((button) => {
	button.addEventListener("click", (button) => {
		const value = button.target.textContent;
		displayValue += value;
		updateScreen(displayValue);

		if (button.target.classList.contains("operator")) {
			operator = value;
		}
		if (button.target.className == "number") {
			if (!operator) {
				firstNumber += value;
			} else {
				secondNumber += value;
			}
		}
		if (button.target.id == "equals") {
			displayValue += operate(operator, firstNumber, secondNumber);
			updateScreen(displayValue);
		}
	});
});

function add(a, b) {
	return Number(a) + Number(b);
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
function operate(operator, firstNumber, secondNumber) {
	console.log("started");
	let total;
	switch (operator) {
		case "+":
			total = add(firstNumber, secondNumber);
			break;
		case "-":
			total = subtract(firstNumber, secondNumber);
			break;
		case "*":
			total = multiply(firstNumber, secondNumber);
			break;
		case "/":
			total = divide(firstNumber, secondNumber);
			break;
	}
	return total;
}
function updateScreen(displayValue) {
	screen.textContent = displayValue;
}
