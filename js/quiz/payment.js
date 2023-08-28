document.addEventListener('DOMContentLoaded', function () {


    const secretCodeInput = document.querySelector('.secret-code');


    const toggleCodeBtn = document.querySelector('.toggle-code-btn');
    if (toggleCodeBtn) {
        toggleCodeBtn.addEventListener('click', function () {
            if (secretCodeInput.type === 'password') {
                secretCodeInput.type = 'text';
                toggleCodeBtn.classList.add('active');
            } else {
                secretCodeInput.type = 'password';
                toggleCodeBtn.classList.remove('active');
            }
        });
    }

    const expiryInput = document.querySelector('.expiry-input');

    expiryInput.addEventListener('input', function () {
        let inputValue = expiryInput.value.replace(/\D/g, '');

        if (inputValue.length > 2) {
            inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
        }

        if (inputValue.length > 1) {
            const firstDigit = inputValue.charAt(0);
            if (firstDigit > 1) {
                inputValue = '0' + firstDigit + '/' + inputValue.slice(1);
            }
        }

        expiryInput.value = inputValue;

        const month = inputValue.slice(0, 2);
        if (month > 12) {
            expiryInput.setCustomValidity('Invalid month');
        } else {
            expiryInput.setCustomValidity('');
        }
    });

    expiryInput.addEventListener('invalid', function () {
        expiryInput.setCustomValidity('Invalid month');
    });

});


document.addEventListener('DOMContentLoaded', function () {
    const cardNumInput = document.querySelector('.card-num');
    const nameInput = document.querySelector('.name');
    const expiryInput = document.querySelector('.expiry-input');
    const secretCodeInput = document.querySelector('.secret-code');
    const submitButton = document.querySelector('#nextButton');

    function updateSubmitButtonState() {
        if (
            nameInput.value.trim() !== '' &&
            /^\d{2}\/\d{2}$/.test(expiryInput.value) &&
            /^\d{3}$/.test(secretCodeInput.value) &&
            /^\d{16}$/.test(cardNumInput.value.replace(/\s/g, ''))
        ) {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    }

    var cc = document.getElementById("bank-card-input");
    for (var i in ['input', 'change', 'blur', 'keyup']) {
        cc.addEventListener('input', formatCardCode, false);
        cc.addEventListener('input', detectTypeCard, false);
    }
    function formatCardCode() {
        var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
        cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
        this.value = cardCode;
    }

    if (submitButton) {
        nameInput.addEventListener('input', updateSubmitButtonState);
        secretCodeInput.addEventListener('input', updateSubmitButtonState);

        cardNumInput.addEventListener('input', function () {
            const cardNumValue = cardNumInput.value.replace(/\s/g, '');
            if (cardNumValue.length < 16) {
                submitButton.setAttribute('disabled', 'disabled');
            } else {
                updateSubmitButtonState();
            }
        });

        expiryInput.addEventListener('input', function () {
            const inputValue = expiryInput.value.replace(/\D/g, '');

            if (inputValue.length === 4) {
                const month = parseInt(inputValue.slice(0, 2));
                if (month > 0 && month <= 12) {
                    updateSubmitButtonState();
                } else {
                    submitButton.setAttribute('disabled', 'disabled');
                }
            } else {
                submitButton.setAttribute('disabled', 'disabled');
            }
        });
    }
});


function detectTypeCard() {
    const card = document.getElementById('bank-card-input');
    const cardNubmer = card.value.replace(/[^\d]/g, '');
    const logoType = document.getElementById('card-logo');
    var cardInfo = new CardInfo(cardNubmer);
    if (cardInfo.brandLogoSvg) {
        logoType.setAttribute('src', cardInfo.brandLogoSvg);
    }
    console.log('num = ' + cardNubmer);
    console.log(cardInfo);
}
