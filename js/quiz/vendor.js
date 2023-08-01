var questionnaireContainer = document.getElementById('questionnaire-container');

newQuestionnaireData.questions.forEach(function(question, index) {
    var answerCount = question.answers.length;
    var questionHtml = document.createElement('div');
    questionHtml.classList.add('chubs-step');
    questionHtml.classList.add('chubs-step-index-' + index);
    questionHtml.classList.add('chubs-step-step-' + question.step);

    questionHtml.style.display = 'none';
    var fieldset = document.createElement('fieldset');
    fieldset.classList.add('inner');

    var legend = document.createElement('legend');
    legend.textContent = question.title;

    var p = document.createElement('p');
    p.textContent = question.hint;

    var answersDiv = document.createElement('div');
    answersDiv.classList.add('chubs-quiz-answers');
    answersDiv.classList.add('chubs-quiz-answers-type-' + question.type);
    answersDiv.classList.add('chubs-quiz-answers-' + answerCount);

    var answerLabel = document.createElement('div');
    answerLabel.classList.add('chubs-quiz-answer-label');
    answerLabel.classList.add('answer-btn');


    if (question.type === 'radio') {

        question.answers.forEach(function(answer, i) {
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'question_' + index;
            radio.value = answer[i];

            var label = document.createElement('div');
            label.classList.add('chubs-quiz-answer-label-text');
            label.textContent = answer[i];

            var answerContainer = document.createElement('div');
            answerContainer.classList.add('chubs-quiz-answer-label');
            answerContainer.classList.add('answer-btn');
            answerContainer.appendChild(radio);
            answerContainer.appendChild(label);
            answersDiv.appendChild(answerContainer);
        });

        answerLabel.appendChild(answersDiv);

    } else if (question.type === 'checkbox') {

        question.answers.forEach(function(answer, i) {
            var radio = document.createElement('input');
            radio.type = 'checkbox';
            radio.name = 'question_' + index;
            radio.value = answer[i];

            var label = document.createElement('label');
            label.classList.add('chubs-quiz-answer-label-text');
            label.textContent = answer[i];

            var answerContainer = document.createElement('div');
            answerContainer.classList.add('chubs-quiz-answer-label');
            answerContainer.classList.add('answer-btn');
            answerContainer.appendChild(radio);
            answerContainer.appendChild(label);
            answersDiv.appendChild(answerContainer);
        });

        answerLabel.appendChild(answersDiv);

    } else if (question.type === 'textarea') {

        var textarea = document.createElement('textarea');
        textarea.name = 'question_' + index;
        textarea.cols = '30';
        textarea.rows = '10';
        textarea.placeholder = 'Type something';
        textarea.value = 'Type something';

        answerLabel.appendChild(textarea);
        answersDiv.appendChild(answerLabel);

    } else if (question.type === 'slider') {

        var labelList = document.createElement('ul');
        labelList.classList.add('chubs-label-for-range');
        question.answers.forEach(function(answer) {
            for (var key in answer) {
                var text = answer[key];

                var li = document.createElement('li');
                li.textContent = text;
                labelList.appendChild(li);
            }
        });

        var sliderDiv = document.createElement('div');
        sliderDiv.id = 'slider_' + index;

        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'question_' + index;
        hiddenInput.classList.add('chubs-value-for-range_'+ index);

        answerLabel.appendChild(labelList);
        answerLabel.appendChild(sliderDiv);
        answerLabel.appendChild(hiddenInput);
        answersDiv.appendChild(answerLabel);


        question.answers.forEach(function(answer, i) {
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'question_' + index;
            radio.value = answer[i];

            var label = document.createElement('div');
            label.classList.add('chubs-quiz-answer-label-text');
            label.textContent = answer[i];

            var answerContainer = document.createElement('div');
            answerContainer.classList.add('chubs-quiz-answer-label');
            answerContainer.classList.add('answer-btn');
            answerContainer.classList.add('answer-btn-hidden-pc');
            answerContainer.appendChild(radio);
            answerContainer.appendChild(label);
            answersDiv.appendChild(answerContainer);
        });

    } else if (question.type === 'select') {

        var select = document.createElement('select');
        select.name = 'question_' + index;
        select.classList.add('select_states');
        select.required = true;

        var defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select state';
        select.appendChild(defaultOption);

        states.forEach(function(state) {
            var option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            select.appendChild(option);
        });

        var selectContainer = document.createElement('div');
        selectContainer.classList.add('chubs-quiz-answer-label');
        selectContainer.classList.add('answer-btn');
        selectContainer.appendChild(select);

        answersDiv.appendChild(selectContainer);

    } else if (question.type === 'birth') {

        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'date_' + index;
        input.placeholder = 'MM/DD/YY';
        input.value = '11/11/2012';
        input.inputmode = 'text';
        input.classList.add('date');

        answerLabel.appendChild(input);
        answersDiv.appendChild(answerLabel);

    } else if (question.type === 'contacts') {

        var emailContainer = document.createElement('div');
        emailContainer.classList.add('chubs-quiz-answer-label');
        emailContainer.classList.add('answer-btn');

        var emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.value = 'email@gmail.com';
        emailInput.name = 'email_' + index;
        emailInput.placeholder = 'Email';
        emailInput.classList.add('email');

        emailContainer.appendChild(emailInput);
        answersDiv.appendChild(emailContainer);

        var phoneContainer = document.createElement('div');
        phoneContainer.classList.add('chubs-quiz-answer-label');
        phoneContainer.classList.add('answer-btn');

        var phoneInput = document.createElement('input');
        phoneInput.type = 'tel';
        phoneInput.name = 'phone_' + index;
        phoneInput.placeholder = '(_ _ _) _ _ _ - _ _ - _ _ ';
        phoneInput.classList.add('phone');

        phoneContainer.appendChild(phoneInput);
        answersDiv.appendChild(phoneContainer);

    } else if (question.type === 'number') {

        var topContainerDiv = document.createElement('div');
        topContainerDiv.classList.add('chubs-quiz-answer-label');
        topContainerDiv.classList.add('answer-btn');

        var topLabel = document.createElement('p');
        topLabel.textContent = 'Top #';

        var topInput = document.createElement('input');
        topInput.type = 'number';
        topInput.name = 'min_' + index;
        topInput.placeholder = 'minHg';

        topInput.min = '0';
        topInput.max = '300';
        topInput.classList.add('inputmode', 'numeric');

        var topUnitLabel = document.createElement('p');
        topUnitLabel.textContent = '(Systolic)';

        topContainerDiv.appendChild(topLabel);
        topContainerDiv.appendChild(topInput);
        topContainerDiv.appendChild(topUnitLabel);

        answersDiv.appendChild(topContainerDiv);

        var bottomContainerDiv = document.createElement('div');
        bottomContainerDiv.classList.add('chubs-quiz-answer-label');
        bottomContainerDiv.classList.add('answer-btn');

        var bottomLabel = document.createElement('p');
        bottomLabel.textContent = 'Bottom #';

        var bottomInput = document.createElement('input');
        bottomInput.type = 'number';
        bottomInput.name = 'max_' + index;
        bottomInput.placeholder = 'mmHg';
        bottomInput.min = '0';
        bottomInput.max = '300';
        bottomInput.classList.add('inputmode', 'numeric');

        var bottomUnitLabel = document.createElement('p');
        bottomUnitLabel.textContent = '(Diastolic)';

        bottomContainerDiv.appendChild(bottomLabel);
        bottomContainerDiv.appendChild(bottomInput);
        bottomContainerDiv.appendChild(bottomUnitLabel);

        answersDiv.appendChild(bottomContainerDiv);

        var rememberContainerDiv = document.createElement('div');
        rememberContainerDiv.classList.add('chubs-quiz-answer-label');
        rememberContainerDiv.classList.add('answer-btn');

        var rememberInput = document.createElement('input');
        rememberInput.type = 'radio';
        rememberInput.name = 'remember_' + index;
        rememberInput.value = 'I don`t remember';

        var rememberLabel = document.createElement('div');
        rememberLabel.classList.add('chubs-quiz-answer-label-text');
        rememberLabel.textContent = 'I don`t remember';

        rememberContainerDiv.appendChild(rememberInput);
        rememberContainerDiv.appendChild(rememberLabel);

        answersDiv.appendChild(rememberContainerDiv);

    }

    if (question.attention_required && question.attention_required.length > 0) {
        var attentionRequired = question.attention_required[0];

        if (attentionRequired.consent && attentionRequired.consent.value === true) {
            var description = attentionRequired.consent.description || '';
            addConsentCheckboxToQuestion(answersDiv, description);
        }
    }


    fieldset.appendChild(legend);
    fieldset.appendChild(p);
    fieldset.appendChild(answersDiv);
    questionHtml.appendChild(fieldset);
    questionnaireContainer.appendChild(questionHtml);

    if (question.type === 'slider') {
        activateSlider('slider_' + index, index);
    }
});



function activateSlider(id,index) {
    var slider = document.getElementById(id);
    var input = document.querySelector('.chubs-value-for-range_'+ index);
    var valueLabels = {
        1: "Always",
        2: "More than half the time",
        3: "Sometimes",
        4: "Rarely",
        5: "Never"
    };

    noUiSlider.create(slider, {
        start: 3,
        connect: 'lower',
        range: {
            min: 1,
            max: 5
        },
        step: 1
    });

    slider.noUiSlider.on("update", function(values) {
        let val = parseInt(values[0]);
        input.value = valueLabels[val];
    });
}


function addConsentCheckboxToQuestion(answersDiv, description) {
    var checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('chubs-quiz-answer-label');
    checkboxContainer.classList.add('answer-btn');
    checkboxContainer.classList.add('answer-btn-consert');

    var checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.name = 'attention_required_checkbox';
    checkboxInput.value = description;

    var checkboxLabel = document.createElement('label');
    checkboxLabel.classList.add('chubs-quiz-answer-label-text');
    checkboxLabel.textContent = description;

    checkboxContainer.appendChild(checkboxInput);
    checkboxContainer.appendChild(checkboxLabel);
    answersDiv.appendChild(checkboxContainer);
}