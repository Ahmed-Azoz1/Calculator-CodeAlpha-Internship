const display = document.getElementById('display');
let currentInput = ''; // Stores the current input
let expression = ''; // Stores the entire expression

// Add click event listeners to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            clearAll(); // Clear everything when 'C' is pressed
        } else if (value === '=') {
            calculate(); // Calculate result when '=' is pressed
        } else if (value === '←') {
            deleteLast(); // Remove last character when '←' is pressed
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperation(value); // Set the current operation
        } else {
            appendValue(value); // Append number or operator to the current input
        }
    });
});

// Function to clear all inputs and reset state
function clearAll() {
    currentInput = '';
    expression = '';
    display.value = '';
}

// Function to calculate the result of the expression
function calculate() {
    if (expression) {
        try {
            // Evaluate the entire expression using eval
            const result = eval(expression);
            display.value = result; // Show the result
            expression = result.toString(); // Store the result as the new expression
            currentInput = ''; // Reset current input
        } catch (error) {
            display.value = 'Error'; // Display error if calculation fails
            expression = '';
        }
    }
}

// Function to append value to the current input
function appendValue(value) {
    if (value === '=' || value === 'C' || value === '←') return;

    // Append value to expression
    expression += value;
    display.value = expression; // Update display with current expression
}

// Function to remove the last character from the input
function deleteLast() {
    if (expression) {
        // Remove last character from expression
        expression = expression.slice(0, -1);
        display.value = expression; // Update display with modified expression
    }
}