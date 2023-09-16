console.log("script loaded");
let firstNumber = "";
let operator = "";
let secondNumber = "";

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
	number.addEventListener("click", (number) => {
		firstNumber += number.target.textContent;
		console.log(firstNumber);
	});
});
