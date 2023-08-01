    setTimeout(hidePreloader, 1500);

    var selectorx = $('.select_states').select2();
    var steps = document.querySelectorAll('.chubs-step');
    var nextButton = document.getElementById('nextStep');
    var prevButton = document.getElementById('prevStep');
    var currentStepElement = document.querySelector('.current-step');
    var totalStepElement = document.querySelector('.total-step');
    var currentStep = 0;
    var uniqueSortedSteps = [];

    /* testing work*/
    var branches = [];
    var branchesIndex = 0;

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

                if ((newQuestionnaireData.questions[currentStep].parent_question) || (newQuestionnaireData.questions[currentStep].multiply)) {

                    var selectedAnswers = grtSeletcedAnswerMulti(steps[currentStep]);
                    var nextSteps = getNextStepMulti(selectedAnswers); // is true
                    let uniqueSrotedSteps = [...new Set(nextSteps)].sort();

                    console.log('inner multiply');

                    // save branch   branchesIndex
                    if (currentStep == 44) {
                        branches = uniqueSrotedSteps;
                        console.log(branches);
                    }

                    if (branchesIndex < branches.length) {

                        currentStep = branches[branchesIndex];
                        branchesIndex++;
                        showStep(currentStep);
                        updateStepInfo();
                        toggleButtonVisibility(currentStep);

                    } else {
                        currentStep = 51;
                        showStep(currentStep);
                        updateStepInfo();
                        toggleButtonVisibility(currentStep);
                    }

                } else {
                    var selectedAnswer = getSelectedAnswer(steps[currentStep]);
                    console.log(selectedAnswer);
                    getNextStep(selectedAnswer);
                    showStep(currentStep);
                    updateStepInfo();
                    toggleButtonVisibility(currentStep);
                    console.log(currentStep);
                }

                newQuestionnaireData.questions[currentStep].prev_question = lastStep;
                window.newQuestionnaireData = newQuestionnaireData;
                window.questionnaireData = questionnaireData;
                console.log(newQuestionnaireData.questions[currentStep]);
            }
        });

        prevButton.addEventListener('click', function() {
            if (currentStep > 0) {
                newQuestionnaireData.questions[currentStep].answered = false;
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
                    branchesIndex--;
                } else {
                    console.log('Element at currentStep ' + currentStep + ' does not exist.');
                }
            }
        });

    });

    function getNextStepMulti(selectedAnswers) {
        const question = questionnaireData.questions[currentStep];
        const nextAnswers = question.next_questions;

        if (nextAnswers && Array.isArray(nextAnswers)) {
            console.log(selectedAnswers);
            const nextSteps = selectedAnswers.reduce((steps, selectedAnswer) => {
                const answerNextSteps = nextAnswers[selectedAnswer];
            if (Array.isArray(answerNextSteps)) {
                return [...steps, ...answerNextSteps];
            } else if (typeof answerNextSteps === 'number') {
                return [...steps, answerNextSteps];
            }
            return steps;
        }, []);

            const uniqueSortedSteps = [...new Set(nextSteps)].sort((a, b) => a - b);
            return uniqueSortedSteps;
        } else {
            return [];
        }
    }

    function getAnswerForQuestion(question) {
        var selectedAnswer = null;
        var inputs = document.querySelectorAll('input[name="question_' + question.index + '"]:checked');
        if (inputs.length === 0) {
            return null;
        }
        if (question.type === 'checkbox') {
            selectedAnswer = [];
            inputs.forEach(function (input) {
                selectedAnswer.push(Number(input.value));
            });
        } else if (question.type === 'select') {
            selectedAnswer = Number(inputs[0].value);
        } else {
            selectedAnswer = Number(inputs[0].getAttribute('data-answer-index'));
        }
        return selectedAnswer;
    }

    function getNextStep(selectedAnswer) {
        var question = questionnaireData.questions[currentStep];
        var nextSteps = question.next_questions;
        var parentQuestion = question.parent_question;

        if (parentQuestion !== undefined) {
            currentStep = parentQuestion;
            return;
        }

        if (Array.isArray(selectedAnswer)) {
            var uniqueNextSteps = nextSteps.filter(step => selectedAnswer.includes(step));
            if (uniqueNextSteps.length > 0) {
                currentStep = uniqueNextSteps[0];
            } else {
                currentStep++;
            }
        } else if (nextSteps !== undefined && nextSteps.length > 0) {
            currentStep = nextSteps[0];
        } else {
            currentStep++;
        }
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

    function grtSeletcedAnswerMulti(step) {
        var selectedAnswers = [];
        var inputs = step.querySelectorAll('input[type="radio"], input[type="checkbox"]');
        if (inputs.length === 0) {
            return null;
        }
        inputs.forEach(function(input, index) {
            if (input.checked) {
                selectedAnswers.push(index);
            }
        });
        return selectedAnswers;
    }

    function hideStep(stepIndex) {
        steps[stepIndex].style.display = 'none';
    }

    function showStep(stepIndex) {
        steps[stepIndex].style.display = 'block';
    }

    function toggleButtonVisibility(currentStep) {
        if (currentStep === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }
    }

    function getUniqueSortedSteps(selectedAnswers) {
        const nextAnswers = questionnaireData.questions[currentStep].next_questions;
        const nextSteps = selectedAnswers.reduce((steps, selectedAnswer) => {
            const answerNextSteps = nextAnswers[selectedAnswer];
            if (Array.isArray(answerNextSteps)) {
                return [...steps, ...answerNextSteps];
            } else if (typeof answerNextSteps === 'number') {
                return [...steps, answerNextSteps];
            }
            return steps;
        }, []);

        const uniqueSortedSteps = [...new Set(nextSteps)].sort();
        return uniqueSortedSteps;
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

    var answerBtns = document.querySelectorAll('.chubs-quiz-answers-type-number .answer-btn');
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