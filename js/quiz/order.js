var selectorx = $('.select_states').select2();

var stateSelect = document.getElementById("state");

<<<<<<< Updated upstream
statesData.forEach(function(state) {
    var option = document.createElement("option");
    option.value = state.abbreviation;
    option.textContent = state.name;
    stateSelect.appendChild(option);
});
=======
if (stateSelect) {
    statesData.forEach(function(state) {
        console.log(state);
        var option = document.createElement("option");
        option.value = state.abbreviation;
        option.textContent = state.name;
        stateSelect.appendChild(option);
    });
}

>>>>>>> Stashed changes

document.addEventListener('DOMContentLoaded', function () {

    /* enable disable editable fields*/
    changeAndSaveField();

});


document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.querySelector('.btn-add-address');
    const addAddressForm = document.querySelector('.add-address-form');

    addButton.addEventListener('click', function () {
        getLocalStorageData();
        addAddressForm.style.display = 'block';
    });

    const paymentTypeBtn = document.querySelector('.payment-type-btn');
    const hiddenDesc = document.querySelector('.subscriptions-section .payment-hidden-desc');
    if (paymentTypeBtn) {
        paymentTypeBtn.addEventListener('click', function () {
            hiddenDesc.style.display = 'block';
        });
    }

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
});



document.addEventListener('DOMContentLoaded', function() {

    var modalButtons = document.querySelectorAll('.open-modal-dialog'),
        overlay      = document.querySelector('body'),
        closeButtons = document.querySelectorAll('.modal-dialog .modal-close');

    /* open modal*/
    modalButtons.forEach(function(modalBtn){
        modalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var modalId = this.getAttribute('data-src'),
                modalElem = document.querySelector('.modal-dialog.'+modalId);
            overlay.classList.add('modal-open');
            modalElem.style.display = "block";
            modalElem.classList.add('modal-opening');
        }); // end click
    }); // end foreach

    /* close modal */
    closeButtons.forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            this.closest('.modal-dialog').style.display = "none";
            overlay.classList.remove('modal-open');
            this.closest('.modal-dialog').classList.remove('modal-opening');
        })
    });

    document.querySelectorAll('.modal-dialog').forEach(function(item) {
        item.addEventListener('click', function (e) {
            if(e.target !== e.currentTarget) {
                return
            } else {
                this.style.display = "none";
                this.classList.remove('modal-opening');
            }
        })
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var addNewAddressButton = document.getElementById('addNewAddress');
    var shippingCardsContainer = document.getElementById('shippingCardsContainer');

    addNewAddressButton.addEventListener('click', function() {
        addAddress();
    });
});

function validateFields(fields) {
    var isValid = true;
    console.log(fields);
    fields.forEach(function(field) {
        if (field.value === '') {
            field.classList.add('error');
            isValid = false;
            console.log(field);
        } else {
            field.classList.remove('error');
        }
    });

    return isValid;
}

var allLocalStorageData = {};
for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    allLocalStorageData[key] = value;
}
console.log(allLocalStorageData);

document.addEventListener('DOMContentLoaded', function () {

    var form = document.querySelector('.add-address-form');
    var phoneInput = form.querySelector('#phone');
    var emailInput = form.querySelector('#email');
    console.log(localStorage.getItem("userPhone"));
    phoneInput.value = localStorage.getItem("userPhone");
    emailInput.value = localStorage.getItem("userEmail");


    //const zipCodeInput = document.querySelector('.zip-code');
    const submitButton = document.querySelector('#addNewAddress');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        addAddress();
    });

    function allnumeric(uzip) {
        const numbers = /^[0-9]+$/;
        return uzip.value.match(numbers);
    }
});


/* change edit form state*/
document.addEventListener('DOMContentLoaded', function () {
    var inputBlocks = document.querySelectorAll('.input-js');

    inputBlocks.forEach(function (inputBlock) {
        var input = inputBlock.querySelector('.edited-text');
        var inputText = inputBlock.querySelector('.input-text');
        var editForm = inputBlock.querySelector('.edit-form');

        inputText.textContent = input.value;
        if (input.value === '') {
            editForm.style.display = 'block';
        }

        input.addEventListener('input', function () {
            inputText.textContent = input.value;
        });
    });
});


function changeAndSaveField() {
    const infoBlocks = document.querySelectorAll('.input-js');

    infoBlocks.forEach(function (infoBlock) {
        const infoText = infoBlock.querySelector('.input-text');
        const editButton = infoBlock.querySelector('.edit-button');
        const editForm = infoBlock.querySelector('.edit-form');
        const editedText = infoBlock.querySelector('.edited-text');

        editButton.addEventListener('click', function (event) {
            if (!editedText.value && !editedText.classList.contains('error')) {
                return;
            }

            if (editForm.style.display === 'none' || editForm.style.display === '') {
                editForm.style.display = 'block';
                editedText.value = infoText.textContent;
                editedText.focus();
                event.preventDefault();

                editedText.value = '';
            } else {
                infoText.textContent = editedText.value;
                editForm.style.display = 'none';
            }
        });
    });
}