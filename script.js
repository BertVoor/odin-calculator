console.log("script loaded");
let firstNumber = "";
let secondNumber = "";
let displayValue = "";
let operator;

const buttons = document.querySelectorAll("button");
const screenTop = document.querySelector("#screenTop");
const screenBottom = document.querySelector("#screenBottom");
const operators = document.querySelectorAll(".operator");

buttons.forEach((button) => {
	button.addEventListener("click", (button) => {
		const value = button.target.textContent;
		displayValue += value;
		updateScreen(displayValue, "bottom");

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
			updateScreen(displayValue, "top");
			let result = operate(operator, firstNumber, secondNumber);
			if (result.toString().length > 10) {
				const i = result.toString().indexOf(".");
				result = result.toFixed(9 - i);
			}
			updateScreen(result, "bottom");
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
	let total;
	switch (operator) {
		case "+":
			total = add(firstNumber, secondNumber);
			break;
		case "-":
			total = subtract(firstNumber, secondNumber);
			break;
		case "x":
			total = multiply(firstNumber, secondNumber);
			break;
		case "/":
			total = divide(firstNumber, secondNumber);
			break;
	}
	return total;
}
function updateScreen(displayValue, screen) {
	screen == "top"
		? (screenTop.textContent = displayValue)
		: (screenBottom.textContent = displayValue);
}
