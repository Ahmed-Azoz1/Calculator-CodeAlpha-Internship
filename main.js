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