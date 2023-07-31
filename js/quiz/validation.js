
function checkFieldsFilled(currentStep) {
    var inputs = currentStep.querySelectorAll('input, textarea, select');
    var check = false;

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.type === 'radio' || input.type === 'checkbox') {
            if (input.checked) {
                check = true;
            } else {}
        } else if ( input.classList.contains('phone') ) {
            var unmaskedValue = input.value;
            if (unmaskedValue.length > 0) {
                check = true;
            }
        } else if ( input.classList.contains('email') ) {
            var unmaskedValue = input.value;
            if (unmaskedValue.length > 0) {
                check = true;
            }
        } else if (input.value) {
            check = true;
        }
    }

    return check;
}


function checkFieldsValid(currentStep) {
    var inputs = currentStep.querySelectorAll('input, textarea, select');
    var isValid = true;

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];

        if (input.type === 'radio' || input.type === 'checkbox') {
            continue;
        }

        if (input.classList.contains('phone') && !validatePhone(input.inputmask.unmaskedvalue())) {
            isValid = false;
            console.log('Invalid phone: ' + input.value);
            input.classList.remove('success');
            input.classList.add('error');
        } else if (input.classList.contains('email') && !validateEmail(input.value)) {
            isValid = false;
            console.log('Invalid email: ' + input.value);
            input.classList.remove('success');
            input.classList.add('error');
        } else if (input.classList.contains('date') && !validateDate(input.value)) {
            isValid = false;
            console.log('Invalid date: ' + input.value);
            input.classList.remove('success');
            input.classList.add('error');

        } else if (input.type === 'number') {
            var minValue = input.getAttribute('min');
            console.log(minValue);
            var maxValue = input.getAttribute('max');
            console.log(maxValue);
            var inputValue = input.value;

            if (minValue !== null && parseFloat(inputValue) < parseFloat(minValue)) {
                isValid = false;
                console.log('Value is less than min: ' + inputValue);
                input.classList.remove('success');
                input.classList.add('error');
            } else if (maxValue !== null && parseFloat(inputValue) > parseFloat(maxValue)) {
                isValid = false;
                console.log('Value is greater than max: ' + inputValue);
                input.classList.remove('success');
                input.classList.add('error');
            } else {
                input.classList.remove('error');
                input.classList.add('success');
            }
        } else {
            input.classList.remove('error');
            input.classList.add('success');
        }
    }

    return isValid;
}


function hidePreloader() {
    var preloader = document.getElementById('preloader');
    preloader.classList.add('hide');
}

function formatPhoneNumber(phoneNumber) {
    var formattedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "+1 ($1) $2-$3-$4");
    return formattedNumber;
}

function validatePhone(phone) {
    /* format: +1 (XXX) XXX-XX-XX */
    var phonePattern = /^\+1 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return phonePattern.test(formatPhoneNumber(phone));
}

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateDate(date) {
    var datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(20)\d{2}$/;
    return datePattern.test(date);
}




/*
var phoneInputs = document.querySelectorAll('.phone');
phoneInputs.forEach(function(input) {
    input.addEventListener('input', function() {
        var phone = input.inputmask.unmaskedvalue();
        if (phone.length > 0) {
            if (validatePhone(phone)) {
                this.classList.remove('error');
                this.classList.add('success');
            } else {
                this.classList.remove('success');
                this.classList.add('error');
            }
        } else {
            this.classList.remove('error');
            this.classList.remove('success');
        }
    });
});


var emailInputs = document.querySelectorAll('.email');
emailInputs.forEach(function(input) {
    input.addEventListener('input', function() {
        var phone = input.inputmask.unmaskedvalue();
        if (email.length > 0) {
            if (validateEmail(email)) {
                this.classList.remove('error');
                this.classList.add('success');
            } else {
                this.classList.remove('success');
                this.classList.add('error');
            }
        } else {
            this.classList.remove('error');
            this.classList.remove('success');
        }
    });
});

var dateInput = document.querySelector('.date');
dateInput.addEventListener('input', function() {
    var phone = input.inputmask.unmaskedvalue();
    if (date.length > 0) {
        if (validateDate(date)) {
            this.classList.remove('error');
            this.classList.add('success');
        } else {
            this.classList.remove('success');
            this.classList.add('error');
        }
    } else {
        this.classList.remove('error');
        this.classList.remove('success');
    }
});
*/


$(document).ready(function() {
    $('.date').inputmask('99/99/9999', {
        inputmode: 'numeric',
        onBeforeValidate: function (value, opts) {
            // return validatePhone(value);
        },
        onInvalid: function (event, value, validations) {
            event.target.classList.add('error');
            event.target.classList.remove('success');
        },
        onValid: function (event) {
            event.target.classList.remove('error');
            event.target.classList.add('success');
        }
    });

    $('.phone').inputmask('+1 (999) 999-99-99');
    $('.email').inputmask({
        alias: 'email',
    });
});