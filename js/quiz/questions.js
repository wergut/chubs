var questionnaireData = {
    "questions": [
        {
            "index": 0,
            "title": "How often do you have trouble getting or keeping an erection during sex?",
            "type": "slider",
            "subquestion": "a",
            "answers": [
                { "0": "Always" },
                { "1": "More than half the time" },
                { "2": "Sometimes" },
                { "3": "Rarely" },
                { "4": "Never" }
            ],
            "tooltip": [],
            "next_questions": [ 1 ],
            "attention_required": [],
            "hint": "Select the frequency of the problem"
        },
        {
            "index": 1,
            "title": "What do you expect from treatment?",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Being able to get and keep an erection during sex" },
                { "1": "Increasing my libido" },
                { "2": "Both" }
            ],
            "next_questions": [ 2 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 2,
            "title": "Select your state ",
            "type": "select",
            "subquestion": "a",
            "answers": [],
            "next_questions": [ 3 ],
            "attention_required": [
                {
                    "consent": {
                        "value": true,
                        "description": "I agree to the Terms and Conditions, Privacy Policy, and Telehealth Consent."
                    },
                    "warning": {
                        "value": false
                    }
                }
            ],
            "hint": "Choose your state and agree to the personal data processing policy"
        },
        {
            "index": 3,
            "title": "Confirm your date of birth",
            "type": "birth",
            "subquestion": "a",
            "answers": [],
            "next_questions": [ 4 ],
            "hint": "Please note the birth date is to be verified by ID"
        },
        {
            "index": 4,
            "title": "You're eligible for treatment",
            "type": "contacts",
            "subquestion": "a",
            "answers": [],
            "next_questions": [ 5 ],
            "addition_someone_field": [],
            "hint": "Leave your details so we can contact you"
        },
        {
            "index": 5,
            "title": "How often do you have trouble getting or keeping an erection during sex?",
            "type": "slider",
            "subquestion": "a",
            "answers": [
                { "0": "Always" },
                { "1": "More than half the time" },
                { "2": "Sometimes" },
                { "3": "Rarely" },
                { "4": "Never" }
            ],
            "next_questions": [ 6, 6, 6, 6, 6 ],
            "attention_required": [],
            "hint": "Select the frequency of the problem"
        },
        {
            "index": 6,
            "title": "Pick the scenario that best describes your ED.",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Difficulty getting erections" },
                { "1": "Difficulty sustaining erections" },
                { "2": "Both" }
            ],
            "next_questions": [ 7, 7, 7 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 7,
            "title": "How did your ED start?",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Suddenly" },
                { "1": "Gradually worsened over time" }
            ],
            "next_questions": [ 8, 8 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 8,
            "title": "Rate the typical stiffness or quality of your erection during masturbation.",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Penis does not enlarge" },
                { "1": "Penis is hard enough for penetration, but not completely hard" },
                { "2": "Penis is larger, but not hard" },
                { "3": "Penis is completely hard and fully rigid" },
                { "4": "Penis is hard, but not hard enough for penetration" }
            ],
            "next_questions": [ 9, 9, 9, 9, 9 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 9,
            "title": "Rate the typical stiffness or quality of your spontaneous erections in the middle of the night or the morning.",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Penis does not enlarge" },
                { "1": "Penis is hard enough for penetration, but not completely hard" },
                { "2": "Penis is larger, but not hard" },
                { "3": "Penis is completely hard and fully rigid" },
                { "4": "Penis is hard, but not hard enough for penetration" }
            ],
            "next_questions": [ 10 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 10,
            "title": "Rate the typical stiffness or quality of your erections with a sexual partner.",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Penis does not enlarge" },
                { "1": "Penis is hard enough for penetration, but not completely hard" },
                { "2": "Penis is larger, but not hard" },
                { "3": "Penis is completely hard and fully rigid" },
                { "4": "Penis is hard, but not hard enough for penetration" }
            ],
            "next_questions": [ 11 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 11,
            "title": "Do you have low sex drive, an overall lack of energy, or a decrease in physical strength or endurance?",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 12 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 12,
            "title": "Which of the following treatments have you used to treat your ED in the past?",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Sildenafil (Viagra or generic)" },
                { "1": "Tadalafil (Cialis or generic)" },
                { "2": "Vardenafil (Levitra or generic)" },
                { "3": "Avanafil (Stendra)" },
                { "4": "Other" },
                { "5": "None" }
            ],
            "next_questions": [ 13, 17, 21, 25, 29, 30 ], // this branching ????????
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 13,
            "title": "Were you happy with your treatment with sildenafil?",
            "type": "radio",
            "is_subquestion" : true,
            "subquestion": "a",
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 14, 15 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 14,
            "title": "Please tell us more about your sildenafil usage. Which dosages did you try? Were they effective?",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "b",
            "answers": [],
            "next_questions": [ 30 ],
            "attention_required": [],
            "hint": "Please include all the details you consider important"
        },
        {
            "index": 15,
            "title": "Why were you not happy with your treatment with Sildenafil (Viagra or generic)?",
            "type": "radio",
            "is_subquestion" : true,
            "subquestion": "b",
            "answers": [
                { "0": "It didn't work" },
                { "1": "I had side effects" },
                { "2": "Both" }
            ],
            "next_questions": [ 16 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 16,
            "title": "Please tell us more about your sildenafil usage. Which dosages did you try? Were they effective?",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "c",
            "answers": [],
            "next_questions": [ 30 ],  // on start question
            "attention_required": [],
            "hint": "Please include all the details you consider important"
        },
        {
            "index": 17,
            "title": "Were you happy with your treatment with tadalafil?",
            "type": "radio",
            "is_subquestion" : true,
            "subquestion": "a",
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 18, 19 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 18,
            "title": "Please tell us more about your tadalafil usage. Which dosages did you try? Were they effective?",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "b",
            "answers": [],
            "next_questions": [ 20 ],
            "attention_required": [],
            "hint": "Please include all the details you consider important"
        },
        {
            "index": 19,
            "title": "Why were you not happy with your treatment with tadalafil (Cialis or generic)?",
            "type": "radio",
            "is_subquestion" : true,
            "subquestion": "b",
            "answers": [
                { "0": "It didn't work" },
                { "1": "I had side effects" },
                { "2": "Both" }
            ],
            "next_questions": [ 20 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 20,
            "title": "Please tell us more about your tadalafil usage. Which dosages did you try? Were they effective?",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "c",
            "answers": [],
            "next_questions": [ 30 ],  // on start question
            "attention_required": [],
            "hint": "Please include all the details you consider important"
        },
        {
            "index": 21,
            "title": "Were you happy with your treatment with vardenafil?",
            "type": "radio",
            "is_subquestion" : true,
            "subquestion": "a",
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 22, 23 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 22,
            "title": "Please tell us more about your vardenafil usage. Which dosages did you try? Were they effective?",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "b",
            "answers": [],
            "next_questions": [ 24 ],
            "attention_required": [],
            "hint": "Please include all the details you consider important"
        },
        {
            "index": 23,
            "title": "Why were you not happy with your treatment with Vardenafil (Levitra or generic)?",
            "type": "radio",
            "is_subquestion" : true,
            "subquestion": "b",
            "answers": [
                { "0": "It didn't work" },
                { "1": "I had side effects" },
                { "2": "Both" }
            ],
            "next_questions": [ 24 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 24,
            "title": "Please tell us more about your vardenafil usage. Which dosages did you try? Were they effective?",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "c",
            "answers": [],
            "next_questions": [ 30 ],  // on start question
            "attention_required": [],
            "hint": "Please include all the details you consider important"
        },
        {
            "index": 25,
            "title": "Were you happy with your treatment with avanafil?",
            "type": "radio",
            "is_subquestion" : true,
            "subquestion": "a",
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 26, 27 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 26,
            "title": "Please tell us more about your avanafil usage. Which dosages did you try? Were they effective?",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "b",
            "answers": [],
            "next_questions": [ 28 ],
            "attention_required": [],
            "hint": "Please include all the details you consider important"
        },
        {
            "index": 27,
            "title": "Why were you not happy with your treatment with Avanafil (Stendra)?",
            "type": "radio",
            "is_subquestion" : true,
            "subquestion": "b",
            "answers": [
                { "0": "It didn't work" },
                { "1": "I had side effects" },
                { "2": "Both" }
            ],
            "next_questions": [ 28 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 28,
            "title": "Please tell us more about your avanafil usage. Which dosages did you try? Were they effective?",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "c",
            "answers": [],
            "next_questions": [ 30 ],  // on start question
            "attention_required": [],
            "hint": "Please include all the details you consider important"
        },
        {
            "index": 29,
            "title": "Please tell us more about your usage of other ED treatments. Which dosages did you try? Were they effective?",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "a",
            "answers": [],
            "next_questions": [ 28 ],
            "attention_required": [],
            "hint": "Please include all the details you consider important"
        },
        {
            "index": 30,
            "title": "Do you have any allergies or medication reactions?",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 31, 32 ],
            "attention_required": [],
            "hint": "Include any allergies to food, dyes, prescriptions, or over-the-counter medicines (e.g. antibiotics, allergy medications), herbs, vitamins, supplements, or anything else."
        },
        {
            "index": 31,
            "title": "Please list what you are allergic to.",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "a",
            "answers": [],
            "next_questions": [ 32 ],
            "attention_required": [],
            "hint": "Please list all the allergic agents and reactions you have"
        },
        {
            "index": 32,
            "title": "Have you had any surgeries or hospitalizations?",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 33, 34 ],
            "attention_required": [],
            "hint": "Include any allergies to food, dyes, prescriptions, or over-the-counter medicines (e.g. antibiotics, allergy medications), herbs, vitamins, supplements, or anything else."
        },
        {
            "index": 33,
            "title": "Please tell us the dates and reasons for your surgeries or hospitalizations.",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "a",
            "answers": [],
            "next_questions": [ 34 ],
            "attention_required": [],
            "hint": "Please list all the allergic agents and reactions you have"
        },
        {
            "index": 34,
            "title": "Do you experience any of the following cardiovascular symptoms?",
            "type": "checkbox",
            "subquestion": "a",
            "answers": [
                { "0": "Chest pain when climbing 2 flights of stairs or walking 4 blocks" },
                { "1": "Chest pain with sexual activity" },
                { "2": "Unexplained fainting or dizziness" },
                { "3": "Abnormal heart beats or rhythms" },
                { "4": "None of these apply to me" }
            ],
            "next_questions": [ 35 ],
            "attention_required": [],
            "hint": "Please select all the options that apply"
        },
        {
            "index": 35,
            "title": "Do you have or have you previously been diagnosed with any of the following?",
            "type": "checkbox",
            "subquestion": "a",
            "answers": [
                { "0": "None of these apply to me" },
                { "1": "Eye conditions or diseases" },
                { "2": "HIV/AIDS" },
                { "3": "Nerve, spinal cord, or brain disorders"},
                { "4": "High blood pressure" },
                { "5": "Liver, stomach, or other gastrointestinal conditions" },
                { "6": "Low blood pressure" },
                { "7": "Kidney diseases or conditions" },
                { "8": "Penis conditions other than ED" },
                { "9": "Prostate conditions" },
                { "10": "Vascular conditions affecting arteries or veins" },
                { "11": "Diabetes" },
                { "12": "Blood conditions or diseases" },
                { "13": "Stroke, mini stroke or TIA" }
            ],
            "next_questions": [ 36 ],
            "attention_required": [],
            "hint": "Please select all the options that apply"
        },
        {
            "index": 36,
            "title": "Do you have or have you previously been diagnosed with any of the following heart conditions?",
            "type": "checkbox",
            "subquestion": "a",
            "answers": [
                { "0": "Congestive heart failure" },
                { "1": "Idiopathic Hypertrophic Subaortic Stenosis" },
                { "2": "Coronary artery disease (without prior heart attack)" },
                { "3": "Long QT Syndrome (QT Prolongation)" },
                { "4": "Coronary bypass surgery" },
                { "5": "Other electrical heart abnormalities" },
                { "6": "Coronary angioplasty/stent" },
                { "7": "None of these apply to me" },
                { "8": "Heart attack" }
            ],
            "tooltip": [
                {"1": "aka. hypertrophic obstructive cardiomyopathy"},
            ],
            "next_questions": [ 37],
            "attention_required": [],
            "hint": "Please select all the options that apply"
        },
        {
            "index": 37,
            "title": "Are there any other medical conditions you haven't shared with us already?",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 38, 39 ],
            "attention_required": [],
            "hint": "Be sure to include any medical conditions that you treat with medications."
        },
        {
            "index": 38,
            "title": "Please tell us the dates and reasons for your surgeries or hospitalizations.",
            "type": "textarea",
            "is_subquestion" : true,
            "subquestion": "a",
            "answers": [],
            "next_questions": [ 39 ],
            "attention_required": [],
            "hint": ""
        },
        {
            "index": 39,
            "title": "Do you take any medications, vitamins, or supplements regularly?",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 40, 42 ],
            "attention_required": [],
            "hint": "Be sure to select yes if you take prescription medication for any chronic medical condition (such as high blood pressure, high cholesterol or diabetes)."
        },
        {
            "index": 40,
            "title": "Do you take any of the following medications?",
            "type": "checkbox",
            "is_subquestion" : true,
            "subquestion": "a",
            "answers": [
                { "0": "Nitroglycerin spray, ointment, patches or tablets " },
                { "1": "Uroselective alpha blockers " },
                { "2": "Isosorbide mononitrate, or isosorbide dinitrate " },
                { "3": "Riociguat (Adempas)" },
                { "4": "Nitric Oxide supplements/boosters" },
                { "5": "Any of the following heart medications" },
                { "6": "Non-uroselective alpha blockers " },
                { "7": "None apply" }
            ],
            "tooltip": [
                {"0": "Nitro-Dur, Nitrolingual, Nitrostat, Nitromist, Nitro-Bid, Transderm-Nitro, Nitro-Time, Deponit, Minitran, Nitrek, Nitrodisc, Nitrogard, Nitroglycn, Nitrol ointment, Nitrong, Nitro-Par"},
                {"2": "e.g. Isordil, Dilatrate, Sorbitrate, Imdur, Ismo, Monoket"},
                {"5": "amiodarone (Cordarone, Pacerone), sotalol (Betapace, Sorine, Sotylize), dofetilide (Tikosyn), ibutilide (Corvert), Dronedarone (Multaq), quinidine (Quinaglute, Quinidex), procainamide (Pronestyl, Procan, Procanbid), disopyramide (Norpace, Rythmodan)"},
                {"6": "e.g. doxazosin (Cardura), prazosin (Minipress), terazosin (Hytrin)"},
            ],
            "next_questions": [ 41 ],
            "attention_required": [],
            "hint": "Please select all the options that apply"
        },
        {
            "index": 41,
            "title": "Please list any other current medicines, vitamins, or dietary supplements you take regularly that you haven't already told us about.",
            "type": "textarea",
            "subquestion": "a",
            "answers": [],
            "next_questions": [ 42 ],
            "attention_required": [],
            "hint": "Include exact names of any medicines (e.g. Lipitor, Zyrtec, Ibuprofen)"
        },
        {
            "index": 42,
            "title": "When was the last time you or a healthcare provider checked your blood pressure?",
            "type": "radio",
            "subquestion": "a",
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 43, 44 ],
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 43,
            "title": "What was your last blood pressure reading? (top and bottom numbers)",
            "type": "number",
            "subquestion": "a",
            "hint": "Select the frequency of the problem",
            "next_questions": [ 44 ],
            "attention_required": [],
            "answers": [],
        },
        {
            "index": 44,
            "title": "Have you smoked, ingested or used any of the following within the past 3 months?",
            "type": "checkbox",
            "multiply": true,
            "subquestion": "a",
            "answers": [
                { "0": "Poppers or Rush (Amyl Nitrate or Butyl Nitrate) 45" },
                { "1": "Cannabis 51" },
                { "2": "Cocaine 46" },
                { "3": "Other 50" },
                { "4": "Methamphetamine (crystal meth) 49" },
                { "5": "No, I have not used any recreational drugs in the past 3 months 51" },
                { "6": "Cigarettes 51" }
            ],
            "next_questions": [ 45, 51, 46, 50, 49, 51 ,51 ], //this multyplay questions
            "attention_required": [],
            "hint": "Please select all the options that apply"
        },
        {
            "index": 45,
            "title": "Within the past 3 months, have you used poppers or rush more than you meant to, or felt like you needed to cut down? 45",
            "type": "radio",
            "subquestion": "a",
            "is_subquestion" : true,
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 51 ],
            "parent_question": 44,
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 46,
            "title": "Within the past 3 months, have you used cocaine more than you meant to, or felt like you needed to cut down on cocaine? 46",
            "type": "radio",
            "subquestion": "a",
            "is_subquestion" : true,
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 51, 47 ],
            "parent_question": 44,
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 47,
            "title": "On average, how frequently do you use cocaine? 47",
            "type": "radio",
            "subquestion": "a",
            "is_subquestion" : true,
            "answers": [
                { "0": "At least once per month, or more" },
                { "1": "Less than once per month" }
            ],
            "next_questions": [ 48, 51 ],
            "parent_question": 44,
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 48,
            "title": "The combination of cocaine with oral medications for ED can cause serious life and health threatening emergencies. " +
            "Some of the emergencies that can occur when cocaine and ED medications are combined include the following: " +
            "priapism (an erection that doesn't go away and can cause permanent damage to your penis), stroke (which can cause permanent disability), " +
            "cardiac arrest (your heart stops beating), muscle rigidity, very high fever, death. 48",
            "type": "checkbox",
            "subquestion": "b",
            "is_subquestion" : true,
            "answers": [
                { "0": "I have read the provided warning about the risks of serious medical harm and/or death if I use cocaine and ED medications together"}
            ],
            "next_questions": [ 51 ],
            "parent_question": 44,
            "attention_required": [],
            "hint": ""
        },
        {
            "index": 49,
            "title": "Within the past 3 months, have you used methamphetamine (crystal meth) more than you meant to, or felt like you needed to cut down on? 49",
            "type": "radio",
            "subquestion": "a",
            "is_subquestion" : true,
            "answers": [
                { "0": "Yes" },
                { "1": "No" }
            ],
            "next_questions": [ 51 ],
            "parent_question": 44,
            "attention_required": [],
            "hint": "Please select one option"
        },
        {
            "index": 50,
            "title": "Please explain your choice of \"other,\" and detail any other recreational drugs you use (how frequently, and when was the last time?). 50",
            "type": "textarea",
            "subquestion": "a",
            "is_subquestion" : true,
            "answers": [],
            "next_questions": [ 51 ],
            "parent_question": 44,
            "attention_required": [],
            "hint": ""
        },
        {
            "index": 51,
            "title": "Here's your first message to your clinician. Please introduce yourself and ask the clinician any questions you have about the treatment. " +
            "Feel free to include anything else you want them to know about your condition 51",
            "type": "textarea",
            "subquestion": "a",
            "answers": [],
            "next_questions": [ 52 ], //what next question
            "attention_required": [],
            "hint": ""
        }

    ]
}

var newQuestionnaireData = generateNewQuestionnaireData();

function generateNewQuestionnaireData() {
    var newQuestionnaireData = { "questions": [] };
    var stepCounter = 1;

    for (var i = 0; i < questionnaireData.questions.length; i++) {
        var question = questionnaireData.questions[i];
        var newQuestion = { ...question };

        if (!question.is_subquestion) {
            newQuestion.step = stepCounter;
            stepCounter++;
        } else {
            newQuestion.step = stepCounter-1;
        }

        newQuestionnaireData.questions.push(newQuestion);
    }

    return newQuestionnaireData;
}




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

    } else if (question.type === 'number') {
        var answerNumberMin = document.querySelector('input[name="min_' + questionIndex + '"]');
        var answerNumberMax = document.querySelector('input[name="max_' + questionIndex + '"]');

        var numberMinValue = answerNumberMin.value;
        var numberMaxValue = answerNumberMax.value;

        if (numberMinValue.trim() !== '') {
            answers.push({
                min: numberMinValue
            });
        }

        if (numberMaxValue.trim() !== '') {
            answers.push({
                max: numberMaxValue
            });
        }

        var iDontRememberInput = document.querySelector('input[name="remember_' + questionIndex + '"]');
        if (iDontRememberInput.checked) {
            answers.push({
                dontRemember: true
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


