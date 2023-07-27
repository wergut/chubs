    setTimeout(hidePreloader, 1500);

    var selectorx = $('.select_states').select2();
    var steps = document.querySelectorAll('.chubs-step');
    var nextButton = document.getElementById('nextStep');
    var prevButton = document.getElementById('prevStep');
    var currentStepElement = document.querySelector('.current-step');
    var totalStepElement = document.querySelector('.total-step');
    var currentStep = 0;

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

                    console.log('is multiplay');
                    var selectedAnswers = grtSeletcedAnswerMulti(steps[currentStep]);
                    console.log('selectedAnswers ' + selectedAnswers);
                    var nextSteps = getNextStepMulti(selectedAnswers); // is true
                    console.log('start nextSteps ' + nextSteps);
                    var uniqueSrotedSteps = [...new Set(nextSteps)].sort();

                    console.log('start steps ' + uniqueSrotedSteps);

                    if (uniqueSrotedSteps.length > 0) {
                        console.log(uniqueSrotedSteps);
                        currentStep = uniqueSrotedSteps.shift();
                        console.log('shifting steps ' + uniqueSrotedSteps);


                        if (uniqueSrotedSteps[0]) {
                            newQuestionnaireData.questions[currentStep+1].next_answer[0] == uniqueSrotedSteps[0];
                        }
                        if (currentStep == 51) {
                            //var newCurrentStep =

                            currentStep = 44;  // подставлять нужный следущий вопрос
                        }


                        showStep(currentStep);
                        updateStepInfo();
                        toggleButtonVisibility(currentStep);
                        window.newQuestionnaireData = newQuestionnaireData;
                        console.log('currentStep lost ' + currentStep);
                    } else {
                        currentStep == 51;
                        showStep(currentStep);
                        updateStepInfo();
                        toggleButtonVisibility(currentStep);
                        window.newQuestionnaireData = newQuestionnaireData;
                    }

                } else {
                    console.log('isn\'t multiplay');
                    var selectedAnswer = getSelectedAnswer(steps[currentStep]);
                    getNextStep(selectedAnswer);
                    newQuestionnaireData.questions[currentStep].prev_question = lastStep;
                    showStep(currentStep);
                    updateStepInfo();
                    toggleButtonVisibility(currentStep);
                }
                window.newQuestionnaireData = newQuestionnaireData;


                updatePreTag();


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
        var question = questionnaireData.questions[currentStep];
        var nextSteps = question.next_answer;
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



    function getNextStepMulti(selectedAnswers) {
        var question = questionnaireData.questions[currentStep];
        var nextSteps = question.next_answer;
        var parentQuestion = question.parent_question;

        if (parentQuestion !== undefined) {
            currentStep = parentQuestion;
            return;
        }

        var nextStep = getNextAnswerForMultiQuestion(question, selectedAnswers);
        if (nextStep !== undefined) {
            currentStep = nextStep;
        } else {
            // Проверяем, есть ли еще варианты ответов у текущего вопроса
            var uniqueSortedSteps = getUniqueSortedSteps(selectedAnswers);
            if (uniqueSortedSteps.length > 0) {
                currentStep = uniqueSortedSteps.shift();
            } else {
                currentStep++;
            }
        }

        if (currentStep < steps.length - 1) {
            var newSelectedAnswers = getSelectedAnswer(steps[currentStep]);
            if (Array.isArray(newSelectedAnswers) && newSelectedAnswers.length > 0) {
                selectedAnswers = [...new Set([...selectedAnswers, ...newSelectedAnswers])];
                getNextStepMulti(selectedAnswers);
            }
        }
    }


    function getUniqueSortedSteps(selectedAnswers) {
        const nextAnswers = questionnaireData.questions[currentStep].next_answer;
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




    function getNextAnswerForMultiQuestion(question, selectedAnswers) {
        var nextSteps = question.next_answer;
        var uniqueNextSteps = nextSteps.filter(step => !selectedAnswers.includes(step));
        if (uniqueNextSteps.length > 0) {
            return uniqueNextSteps[0];
        } else {
            return undefined;
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

    function updatePreTag(questions = [44, 45, 46, 47, 48, 49, 50]) {
        var preTag = document.getElementById('question-output');
        var savedQuestions = [];

        questions.forEach(function (index) {
            var question = newQuestionnaireData.questions.find(function (q) {
                return q.index === index;
            });

            if (question) {
                // Копируем исходный объект вопроса, убирая поля "hint" и "title"
                var { hint, title, type, subquestion, is_subquestion, attention_required, answers, multiply, parent_question, step, ...questionWithoutHintTitle } = question;

                var answer = getAnswerForQuestion(question);
                savedQuestions.push({ question: questionWithoutHintTitle, answer: answer });
            }
        });

        preTag.textContent = JSON.stringify(savedQuestions, null, 2);
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

    function getUniqueSortedSteps(selectedAnswers) {
        const nextAnswers = questionnaireData.questions[currentStep].next_answer;
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

