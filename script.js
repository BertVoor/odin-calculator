console.log("script loaded");
let firstNumber = "";
let secondNumber = "";
let displayValue = "";
let operator = null;
let lastKeyPressed;

const buttons = document.querySelectorAll("button");
const screenTop = document.querySelector("#screenTop");
const screenBottom = document.querySelector("#screenBottom");
const screenContainer = document.querySelector("#screenContainer");
const commaBtn = document.querySelector("#comma");

setFontSizes();
window.addEventListener("resize", setFontSizes);
buttons.forEach((button) => {
	button.addEventListener("click", (button) => {
		const value = button.target.textContent;
		if (button.target.id == "clear") {
			clearCalculator();
		} else {
			// TODO:
			// 2.8+8.3 displays as 11.1000000
			// still possible to press 2x operator
			// add keyboard support

			if (button.target.classList.contains("operator")) {
				//if (lastKeyPressed == "+" || lastKeyPressed == "x" || l)
				if (!firstNumber) {
					firstNumber = value;
					displayValue += value;
				} else if (!operator) {
					operator = value;
					displayValue += value;
					commaBtn.disabled = false;
				} else if (!secondNumber) {
					secondNumber = value;
					displayValue += value;
				} else {
					updateScreen("top");

					let result = operate(operator, firstNumber, secondNumber);
					operator = value;
					displayValue = result + value;
					//use result as firstNumber for next calculation
					firstNumber = result;
					secondNumber = "";
					commaBtn.disabled = false;
				}
				updateScreen("bottom");
			}

			if (button.target.className == "number") {
				//number input after "=" resets firstNumber
				if (lastKeyPressed == "=") {
					firstNumber = "";
					displayValue = "";
				}
				//not possible to type "." 2x
				if (value == ".") {
					commaBtn.disabled = true;
				}
				//operator input after "=" uses result as firstNumber
				displayValue += value;
				updateScreen("bottom");
				if (!operator) {
					firstNumber += value;
				} else {
					secondNumber += value;
				}
			}
			if (button.target.id == "equals") {
				if (firstNumber && operator && secondNumber) {
					commaBtn.disabled = false;
					updateScreen("top");
					let result = operate(operator, firstNumber, secondNumber);

					displayValue = result;
					updateScreen("bottom");
					firstNumber = result;
					secondNumber = "";
					operator = null;
				}
			}
		}
		lastKeyPressed = value;
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
	b == "0" ? (result = "nope") : (result = a / b);
	return result;
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
	//round up total to never overflow the display
	if (total.toString().length > 10) {
		const i = total.toString().indexOf(".");
		total = total.toFixed(9 - i);
	}
	return total;
}
function updateScreen(screen) {
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
	displayValue = "0";
	updateScreen("bottom");
	operator = null;
	displayValue = "";
	updateScreen("top");
	commaBtn.disabled = false;
}
