/* payment page*/
document.addEventListener('DOMContentLoaded', function () {
    const cardNumInput = document.querySelector('.card-num');
    const nameInput = document.querySelector('.name');
    const dateInput = document.querySelector('.date');
    const secretCodeInput = document.querySelector('.secret-code');
    const submitButton = document.querySelector('.submit-button');
    const errorMessage = document.querySelector('.error-message');

    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();

            if (nameInput.value.trim() === '') {
                errorMessage.textContent = 'Please enter your name.';
                return;
            }

            if (!/^\d{2}\/\d{2}$/.test(dateInput.value)) {
                errorMessage.textContent = 'Please enter a valid date (MM/YY).';
                return;
            }

            if (!/^\d{3}$/.test(secretCodeInput.value)) {
                errorMessage.textContent = 'Please enter a valid security code (3 digits).';
                return;
            }

            errorMessage.textContent = '';
        });
    }
});