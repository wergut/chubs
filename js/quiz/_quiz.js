setTimeout(hidePreloader, 1500);

var selectorx = $('.select_states').select2();
var steps = document.querySelectorAll('.chubs-step');
var nextButton = document.getElementById('nextStep');
var prevButton = document.getElementById('prevStep');
var currentStepElement = document.querySelector('.current-step');
var totalStepElement = document.querySelector('.total-step');
var currentStep = 0;


var nextDiv = document.getElementById('next');
var prevDiv = document.getElementById('prev');

toggleButtonVisibility(currentStep);
showStep(currentStep);
totalStepElement.textContent = steps.length;

document.addEventListener('DOMContentLoaded', function() {

    nextButton.addEventListener('click', function() {

        if (currentStep < steps.length - 1) {

            if (!checkFieldsFilled( steps[currentStep] )) {
                /* write error tool */
                console.log('not filled');
                return;
            }
            if (!checkFieldsValid( steps[currentStep] )) {
                /* write error tool */
                console.log('not valid');
                return;
            }

            hideStep(currentStep);
            currentStep++;
            showStep(currentStep);
            updateStepInfo();
            toggleButtonVisibility(currentStep);

            nextDiv.textContent = currentStep;

        }
        console.log('step = ', currentStep);
    });

    prevButton.addEventListener('click', function() {
        if (currentStep > 0) {
            hideStep(currentStep);
            currentStep--;
            showStep(currentStep);
            updateStepInfo();
            toggleButtonVisibility(currentStep);

            prevDiv.textContent = currentStep;

        }
    });

});


var answerBtns = document.querySelectorAll('.chubs-quiz-answers-type-radio .answer-btn');
answerBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var currentStep = this.closest('.chubs-step');
        var allAnswerBtns = currentStep.querySelectorAll('.chubs-quiz-answers-type-radio .answer-btn');

        allAnswerBtns.forEach(function(btn) {
            btn.classList.remove('active');
            btn.querySelector('input').checked = false;
        });

        this.classList.add('active');
        this.querySelector('input').checked = true;
    });
});

var answerBtns = document.querySelectorAll('.chubs-quiz-answers-type-checkbox .answer-btn');
answerBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var currentStep = this.closest('.chubs-step');
        var allAnswerBtns = currentStep.querySelectorAll('.chubs-quiz-answers-type-checkbox .answer-btn');

        if (this.checked) {
            this.checked = false;
            this.classList.remove('active');
        } else {
            this.checked = true;
            this.classList.add('active');
        }
    });
});

function hideStep(stepIndex) {
    steps[stepIndex].style.display = 'none';
}

function showStep(stepIndex) {
    steps[stepIndex].style.display = 'block';
}

function updateStepInfo() {
    currentStepElement.textContent = currentStep + 1;
}

function toggleButtonVisibility(currentStep) {
    if (currentStep === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }
}

function getNextStep() {

}

function getPrevStep () {

}


function checkFieldsFilled(currentStep) {
    var inputs = currentStep.querySelectorAll('input, textarea, select');
    var check = false;
    console.log(inputs);

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];

        if (input.type === 'radio' || input.type === 'checkbox') {
            if (input.checked) {
                console.log('radio='+ i, input.value, input.checked);
                check = true;
            } else {
                console.log('radio='+ i, input.value, input.checked);
            }
        } else if ( input.classList.contains('phone') ) {
            console.log(input);
            var unmaskedValue = input.value;
            if (unmaskedValue.length > 0) {
                check = true;
                console.log('input ='+ i, unmaskedValue);
            }
        } else if ( input.classList.contains('email') ) {
            console.log(input);
            var unmaskedValue = input.value;
            //var unmaskedValue = input.inputmask.unmaskedvalue();
            if (unmaskedValue.length > 0) {
                check = true;
                console.log('input ='+ i, unmaskedValue);
            }
        } else if (input.value) {
            console.log('input ='+ i, input.value);
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
