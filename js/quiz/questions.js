var questionnaireData = {
  "questions": [
    {
      "title": "How often do you have trouble getting or keeping an erection during sex?",
      "type": "slider",
      "subquestion": "b",
      "answers": [
        { "0": "Always" },
        { "1": "More than half the time" },
        { "2": "Sometimes" },
        { "3": "Rarely" },
        { "4": "Never" }
      ],
      "next_answer": [ 1,1,1,1,1 ],
      "attention_required": [
        {
          "consent":  {
            "value": "no"
          },
          "warning": {
            "value": "no"
          }
        }
      ],
      "hint": "Select the frequency of the problem"
    },
    {
      "title": "What do you expect from treatment?",
      "type": "checkbox",
      "subquestion": "a",
      "answers": [
        { "0": "Being able to get and keep an erection during sex" },
        { "1": "Increasing my libido" },
        { "2": "Both" }
      ],
      "next_answer": [ 2, 3, 4 ],
      "attention_required": [
        {
          "consent":  {
            "value": "no"
          },
          "warning": {
            "value": "no"
          }
        }
      ],
      "hint": "Please select one option"
    },
    {
      "title": "Select your state ",
      "type": "select",
      "subquestion": "a",
      "answers": [],
      "next_answer": [ 3 ],
      "attention_required": [
        {
          "consent":  {
            "value": "yes",
            "description": "I agree to the Terms and Conditions, Privacy Policy, and Telehealth Consent."
          },
          "warning": {
            "value": "no"
          }
        }
      ],
      "hint": "Choose your state and agree to the personal data processing policy"
    },
    {
      "title": "Confirm your date of birth",
      "type": "birth",
      "subquestion": "a",
      "answers": [],
      "next_answer": [ 4 ],
      "hint": "Please note the birth date is to be verified by ID"
    },
    {
      "title": "You're eligible for treatment",
      "type": "contacts",
      "subquestion": "a",
      "answers": [],
      "next_answer": [ 5 ],
      "addition_someone_field": [
        {
          "consent": "no",
          "warning": "no"
        }
      ],
      "hint": "Leave your details so we can contact you"
    },
    {
      "title": "How often do you have trouble getting or keeping an erection during sex?",
      "type": "slider",
      "subquestion": "b",
      "answers": [
        { "0": "Always" },
        { "1": "More than half the time" },
        { "2": "Sometimes" },
        { "3": "Rarely" },
        { "4": "Never" }
      ],
      "next_answer": [ 6,6,6,6,6 ],
      "attention_required": [
        {
          "consent":  {
            "value": "no"
          },
          "warning": {
            "value": "no"
          }
        }
      ],
      "hint": "Select the frequency of the problem"
    },
    {
      "title": "Pick the scenario that best describes your ED.",
      "type": "radio",
      "subquestion": "a",
      "answers": [
        { "0": "Difficulty getting erections" },
        { "1": "Difficulty sustaining erections" },
        { "2": "Both" }
      ],
      "next_answer": [ 7,7,7 ],
      "attention_required": [
        {
          "consent":  {
            "value": "no"
          },
          "warning": {
            "value": "no"
          }
        }
      ],
      "hint": "Please select one option"
    },
    {
      "title": "How did your ED start?",
      "type": "radio",
      "subquestion": "a",
      "answers": [
        { "0": "Suddenly" },
        { "1": "Gradually worsened over time" },
      ],
      "next_answer": [ 8,8 ],
      "attention_required": [
        {
          "consent":  {
            "value": "no"
          },
          "warning": {
            "value": "no"
          }
        }
      ],
      "hint": "Please select one option"
    },
    {
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
      "next_answer": [ 9,9,9,9,9 ],
      "attention_required": [
        {
          "consent":  {
            "value": "no"
          },
          "warning": {
            "value": "no"
          }
        }
      ],
      "hint": "Please select one option"
    },
    {
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
      "next_answer": [ 10,10,10,10,10 ],
      "attention_required": [
        {
          "consent":  {
            "value": "no"
          },
          "warning": {
            "value": "no"
          }
        }
      ],
      "hint": "Please select one option"
    },
    {
      "title": "Do you have low sex drive, an overall lack of energy, or a decrease in physical strength or endurance?",
      "type": "radio",
      "subquestion": "a",
      "answers": [
        { "0": "Yes" },
        { "1": "No" }
      ],
      "next_answer": [ 11,11 ],
      "attention_required": [
        {
          "consent":  {
            "value": "no"
          },
          "warning": {
            "value": "no"
          }
        }
      ],
      "hint": "Please select one option"
    }
  ]
}