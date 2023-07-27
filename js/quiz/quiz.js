    setTimeout(hidePreloader, 1500);

    var selectorx = $('.select_states').select2();
    var steps = document.querySelectorAll('.chubs-step');
    var nextButton = document.getElementById('nextStep');
    var prevButton = document.getElementById('prevStep');
    var currentStepElement = document.querySelector('.current-step');
    var totalStepElement = document.querySelector('.total-step');
    var currentStep = 0;

    /*
    * need multinext questions
    * */

    toggleButtonVisibility(currentStep);
    showStep(currentStep);

    var filteredQuestions = questionnaireData.questions.filter(function(question) {
        return !('is_subquestion' in question);
    });
    var numberOfQuestionsWithoutSubquestion = filteredQuestions.length;
    totalStepElement.textContent = numberOfQuestionsWithoutSubquestion;

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

                newQuestionnaireData.questions[currentStep].answered = true;
                lastStep = currentStep;

                hideStep(currentStep);
                saveQuestionData(currentStep);


                if (steps[currentStep].multiply) {
                    var selectedAnswers = getSelectedAnswer(steps[currentStep]);
                    var nextSteps = getNextStep(selectedAnswers);
                    console.log(selectedAnswers);

                    nextSteps.forEach(function (nextStep) {
                        currentStep = nextStep;
                        hideStep(lastStep);
                        showStep(currentStep);
                        updateStepInfo();
                        toggleButtonVisibility(currentStep);
                    });

                } else {
                    var selectedAnswer = getSelectedAnswer(steps[currentStep]);
                    console.log(selectedAnswer);

                    getNextStep(selectedAnswer);
                    newQuestionnaireData.questions[currentStep].prev_question = lastStep;
                    showStep(currentStep);
                    updateStepInfo();
                    toggleButtonVisibility(currentStep);
                }


                window.newQuestionnaireData = newQuestionnaireData;

            }

        });

        prevButton.addEventListener('click', function() {
            if (currentStep > 0) {
                hideStep(currentStep);
                var prevStep = newQuestionnaireData.questions[currentStep].prev_question;
                if (prevStep === undefined) {
                    currentStep--;
                } else {
                    currentStep = prevStep;
                }

                if (steps[currentStep]) {
                    showStep(currentStep);
                    updateStepInfo();
                    toggleButtonVisibility(currentStep);
                } else {
                    console.log('Element at currentStep ' + currentStep + ' does not exist.');
                }
            }

        });

    });

    function getNextStep(selectedAnswer) {
        var nextStep = null;
        nextStep = questionnaireData.questions[currentStep].next_answer[selectedAnswer];
        var currentStepSave = currentStep;

        if ((nextStep === null) || (nextStep === undefined)) {
            if (questionnaireData.questions[currentStep].next_answer[0]) {
                currentStep = questionnaireData.questions[currentStep].next_answer[0];
            } else {
                currentStep++;
            }
        } else {
            currentStep = nextStep;
        }
    }






    function hideStep(stepIndex) {
        steps[stepIndex].style.display = 'none';
    }

    function showStep(stepIndex) {
        steps[stepIndex].style.display = 'block';
    }

    function updateStepInfo() {
        var currentQuestion = newQuestionnaireData.questions[currentStep];
        var subquestionEl = document.getElementById('subquestion');

        if (currentQuestion && currentQuestion.is_subquestion === true) {
            subquestionEl.innerText = 'subquestion ' + currentQuestion.subquestion;
        } else {
            subquestionEl.innerText = '';
        }
        currentStepElement.textContent = currentQuestion.step;
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
        return selectedAnswer;
    }

    var answerBtns = document.querySelectorAll('.chubs-quiz-answers-type-slider .answer-btn');
    answerBtns.forEach(function(btn, index) {
        if (index > 0) {
            btn.addEventListener('click', function() {
                var currentStep = this.closest('.chubs-step');
                var allAnswerBtns = currentStep.querySelectorAll('.chubs-quiz-answers-type-slider .answer-btn');

                allAnswerBtns.forEach(function(btn) {
                    btn.classList.remove('active');
                    btn.querySelector('input').checked = false;
                });

                this.classList.add('active');
                this.querySelector('input').checked = true;
            });
        }
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


    var savedData = [];
    function saveQuestionData(questionIndex) {
        var question = questionnaireData.questions[questionIndex];
        var questionTitle = question.title;
        var answers = [];

        if (question.type === 'radio' || question.type === 'checkbox') {
            var answerInputs = document.querySelectorAll('input[name="question_' + questionIndex + '"]');
            answerInputs.forEach(function(input, index) {
                if (input.checked) {
                    var answerIndex = index;
                    var answerText = question.answers[answerIndex];
                    answers.push({
                        text: answerText
                    });
                }
            });

        } else if (question.type === 'slider') {
            var answerInputs = document.querySelector('input[name="question_' + questionIndex + '"]');
            var answerValue = answerInputs.value;
            answers.push({
                text: answerValue
            });

        } else if (question.type === 'select') {
            var answerSelects = document.querySelectorAll('select[name="question_' + questionIndex + '"]');
            answerSelects.forEach(function(input, index) {
                var answerText = input.value;
                answers.push({
                    text: answerText
                });
            });

        } else if (question.type === 'birth') {
            var answerInputs = document.querySelectorAll('input[name="date_' + questionIndex + '"]');
            answerInputs.forEach(function(input, index) {
                var answerIndex = index;
                var answerText = input.value;
                answers.push({
                    text: answerText
                });
            });

        } else if (question.type === 'contacts') {
            var phoneInput = document.querySelector('input[name="phone_' + questionIndex + '"]');
            var emailInput = document.querySelector('input[name="email_' + questionIndex + '"]');

            var phoneValue = phoneInput.value;
            var emailValue = emailInput.value;

            if (phoneValue.trim() !== '') {
                answers.push({
                    phone: phoneValue
                });
            }

            if (emailValue.trim() !== '') {
                answers.push({
                    email: emailValue
                });
            }

            } else if (question.type === 'textarea') {
                var answerTextarea = document.querySelector('textarea[name="question_' + questionIndex + '"]');
                var textareaValue = answerTextarea.value;

                if (textareaValue.trim() !== '') {
                    answers.push({
                        text: textareaValue
                    });
                }
            }


        var existingDataIndex = savedData.findIndex(function(data) {
            return data.questionIndex === questionIndex;
        });

        if (existingDataIndex !== -1) {
            savedData[existingDataIndex].questionTitle = questionTitle;
            savedData[existingDataIndex].answers = answers;
        } else {
            savedData.push({
                questionIndex: questionIndex,
                questionTitle: questionTitle,
                answers: answers
            });
        }
    }



    document.getElementById('saveButton').addEventListener('click', function () {
        console.log(savedData);
        //sendDataToServer(savedData);
    });

    function sendDataToServer(data) {
        var url = 'https://example.com/api/submit';
        var requestData = JSON.stringify(data);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestData
        })
        .then(response => response.json())
        .then(data => {
                console.log('Response from the server:', data);
        })
        .catch(error => {
            console.error('Error while sending data to the server:', error);
        })
    }