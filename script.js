//lege variables aanmaken
var operator = "";
var number1 = null;
var number2 = null;

//nummer in het scherm
function addNumber(i) {
	var screen = document.getElementsByClassName('screen')[0];
	screen.innerHTML = screen.innerHTML + i;
	number2 = screen.innerHTML;
}

//operator toevoegen en controleren of number 1 leeg is
function addOperator(value) {
	var screen = document.getElementsByClassName('screen')[0];
	screen.innerHTML = "";
	operator = value;
	if (number1 != null) {
		if (operator == "+") {
			number1 = Number(number1) + Number(number2);
		}
		if (operator == "-") {
			number1 = Number(number1) - Number(number2);
		}
		if (operator == "*") {
			number1 = Number(number1) * Number(number2);
		}
		if (operator == "/") {
			number1 = Number(number1) / Number(number2);
		}
	} else {
		number1 = number2;
	}
}

//eindsom maken
function calculate() {
	var screen = document.getElementsByClassName('screen')[0];
	screen.innerHTML = "";
	if (operator == "+") {
		screen.innerHTML = Number(number1) + Number(number2);
	}
	if (operator == "-") {
		screen.innerHTML = Number(number1) - Number(number2);
	}
	if (operator == "*") {
		screen.innerHTML = Number(number1) * Number(number2);
	}
	if (operator == "/") {
		screen.innerHTML = Number(number1) / Number(number2);
	}
}

//leegmaken van de rekenmachine
function bobbelpop() {
	var screen = document.getElementsByClassName('screen')[0];
	operator = "";
	number1 = null;
	number2 = null;
	screen.innerHTML = "";
}