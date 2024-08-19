document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('input[name="display"]');
    const buttons = Array.from(document.querySelectorAll('.btn'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'c') {
                // Clear the display
                display.value = '';
            } else if (value === '=') {
                // Evaluate the expression
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                // Append button value to the display
                display.value += value;
            }
        });
    });
});
