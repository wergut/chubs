setTimeout(hidePreloader, 1500);

var selectorx = $('.select_states').select2();
var steps = document.querySelectorAll('.chubs-step');
var nextButton = document.getElementById('nextStep');
var prevButton = document.getElementById('prevStep');
var currentStepElement = document.querySelector('.current-step');
var totalStepElement = document.querySelector('.total-step');
var currentStep = 0;
var lastAnsweredStep = 0;


/*
* custom one prev + next
* need calc current question
* need multinext questions
* save history questions
* need subquestions
* */


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

            lastAnsweredStep = currentStep;
            hideStep(currentStep);
            saveQuestionData(currentStep);
            var selectedAnswer = getSelectedAnswer(steps[currentStep]);
            var nextStep = getNextStep(selectedAnswer);

            showStep(currentStep);
            updateStepInfo();
            toggleButtonVisibility(currentStep);

        }

    });

    prevButton.addEventListener('click', function() {
        if (currentStep > 0) {
            hideStep(currentStep);

            if (lastAnsweredStep > 0) {
                currentStep = lastAnsweredStep;
                lastAnsweredStep = 0;
            } else {
                currentStep--;
            }

            showStep(currentStep);
            updateStepInfo();
            toggleButtonVisibility(currentStep);

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

        if (this.querySelector('input').checked) {
            this.querySelector('input').checked = false;
            this.classList.remove('active');
        } else {
            this.querySelector('input').checked = true;
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


function getSelectedAnswer(step) {
    var selectedAnswer = null;
    var inputs = step.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    if (inputs.length === 0) {
        return null;
    }
    inputs.forEach(function(input, index) {
        if (input.checked) {
            selectedAnswer = index;
        }
    });
    console.log(selectedAnswer);
    return selectedAnswer;
}



function getNextStep(selectedAnswer) {
    var nextStep = null;
    nextStep = questionnaireData.questions[currentStep].next_answer[selectedAnswer];
    var currentStepSave = currentStep;
    if ((nextStep === null) || (nextStep === undefined)) {
        currentStep++;
    } else {
        currentStep = nextStep;
    }
    //console.log('currentStep = %s, selectedAnswer = %s, nextStep = %s', JSON.stringify(currentStepSave+1), selectedAnswer, JSON.stringify(currentStep+1));
}








function getPrevStep () {
}


var savedData = [];

function saveQuestionData(questionIndex) {
    var question = questionnaireData.questions[questionIndex];
    var questionText = question.title;
    var answers = [];

    if (question.type === 'radio' || question.type === 'checkbox') {
        var answerInputs = document.querySelectorAll('input[name="question_' + questionIndex + '"]:checked');
        answerInputs.forEach(function(input, index) {
            var answerIndex = index;
            var answerText = question.answers[answerIndex];
            answers.push({
                index: answerIndex,
                text: answerText
            });
        });
    } else {
        var answerInput = document.querySelector('input[name="question_' + questionIndex + '"]');
        var answerIndex = 0;
        var answerText = question.answers[answerIndex];
        answers.push({
            index: answerIndex,
            text: answerText
        });
    }

    // Check if data for this question already exists
    var existingDataIndex = savedData.findIndex(function(data) {
        return data.questionIndex === questionIndex;
    });

    if (existingDataIndex !== -1) {
        // Update existing data
        savedData[existingDataIndex].questionText = questionText;
        savedData[existingDataIndex].answers = answers;
    } else {
        // Add new data
        savedData.push({
            questionIndex: questionIndex,
            questionText: questionText,
            answers: answers
        });
    }
    console.log(savedData);
}

