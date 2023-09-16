console.log("script loaded");
let firstNumber = "";
let operator = "";
let secondNumber = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
	button.addEventListener("click", (button) => {
		if (button.target.class != operator) {
			if (!operator) {
				firstNumber += button.target.textContent;
			} else {
				secondNumber += button.target.textContent;
			}
		} else if (button.target.class) {
			operator = button.target.textContent;
		}

		console.log(firstNumber);
		console.log(operator);
		console.log(secondNumber);
	});
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
