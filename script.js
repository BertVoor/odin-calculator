console.log("script loaded");
let firstNumber = "";
let secondNumber = "";
let displayValue = "";
let operator = null;

const buttons = document.querySelectorAll("button");
const screenTop = document.querySelector("#screenTop");
const screenBottom = document.querySelector("#screenBottom");
const screenContainer = document.querySelector("#screenContainer");
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");

setFontSizes();
window.addEventListener("resize", setFontSizes);
//TODO: fix below so 12+7-5*3=42
buttons.forEach((button) => {
	button.addEventListener("click", (button) => {
		if (button.target.id == "clear") {
			clearCalculator();
		} else {
			const value = button.target.textContent;
			displayValue += value;
			updateScreen(displayValue, "bottom");

			// if (button.target.classList.contains("operator")) {
			// 	if (firstNumber && !operator) {
			// 		console.log(`operator`);
			// 		operator = value;
			// 	} else if (firstNumber && operator && !secondNumber) {
			// 		console.log(`second Number`);
			// 		secondNumber += value;
			// 	} else if (firstNumber && secondNumber) {
			// 		console.log("second operator");
			// 		updateScreen(displayValue, "top");
			// 		let result = operate(operator, firstNumber, secondNumber);

			// 		updateScreen(result, "bottom");
			// 		displayValue = result;
			// 		firstNumber = result;
			// 		console.log(`first Number: ${firstNumber}`);
			// 		secondNumber = "";
			// 		operator = value;
			// 	} else {
			// 		console.log(`first Number`);
			// 		firstNumber += value;
			// 	}
			// }

			if (button.target.classList.contains("operator")) {
				if (firstNumber == "") {
					firstNumber = value;
				} else if (firstNumber && operator == null) {
					operator = value;
				} else if (firstNumber && operator && secondNumber == "") {
					secondNumber = value;
				} else if (firstNumber && secondNumber) {
					updateScreen(displayValue, "top");

					let result = operate(operator, firstNumber, secondNumber);

					updateScreen(result, "bottom");
					displayValue = result;
					firstNumber = result;
					console.log(`first Number: ${firstNumber}`);
					secondNumber = "";
					operator = value;
				}
			}

			if (button.target.className == "number") {
				if (operator == null) {
					firstNumber += value;
				} else {
					secondNumber += value;
				}
			}
			if (button.target.id == "equals") {
				updateScreen(displayValue, "top");
				console.log(firstNumber, operator, secondNumber);
				let result = operate(operator, firstNumber, secondNumber);

				updateScreen(result, "bottom");
				displayValue = result;
				firstNumber = result;
				secondNumber = "";
				operator = null;
			}
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
	// console.log(total);
	if (total.toString().length > 10) {
		const i = total.toString().indexOf(".");
		total = total.toFixed(9 - i);
	}
	return total;
}
function updateScreen(displayValue, screen) {
	screen == "top"
		? (screenTop.textContent = displayValue)
		: (screenBottom.textContent = displayValue);
}

function setFontSizes() {
	let width = screenContainer.offsetWidth;
	screenTop.style.fontSize = `${width / 9.2}px`;
	screenBottom.style.fontSize = `${width / 4.6}px`;
}

function clearCalculator() {
	firstNumber = "";
	secondNumber = "";
	displayValue = "";
	operator = null;
	updateScreen("", "top");
	updateScreen("0", "bottom");
}
