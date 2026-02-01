// script.js
const display = document.getElementById('display');

// Adds numbers/operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Clears everything
function clearDisplay() {
    display.value = "";
}

// Deletes the last character entered
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Does the math!
function calculate() {
    try {
        // eval() takes the string (e.g., "2+2") and turns it into math
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500); // Clear error after 1.5 seconds
    }
}
