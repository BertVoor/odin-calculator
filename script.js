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

// operate("+", 4, 5);
