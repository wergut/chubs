var selectorx = $('.select_states').select2();


var stateSelect = document.getElementById("state");

statesData.forEach(function(state) {
    console.log(state);
    var option = document.createElement("option");
    option.value = state.abbreviation;
    option.textContent = state.name;
    stateSelect.appendChild(option);
});


document.addEventListener('DOMContentLoaded', function () {

    /* enable disable editable fields*/
    const infoBlocks = document.querySelectorAll('.input-js');

    infoBlocks.forEach(function (infoBlock) {
        const infoText = infoBlock.querySelector('.input-text');
        const editButton = infoBlock.querySelector('.edit-button');
        const editForm = infoBlock.querySelector('.edit-form');
        const editedText = infoBlock.querySelector('.edited-text');

        editButton.addEventListener('click', function (event) {
            if (editForm.style.display === 'none' || editForm.style.display === '') {
                editForm.style.display = 'block';
                editedText.value = infoText.textContent;
                editedText.focus();
                event.preventDefault();

                // Убрать значение из editedText при клике на кнопку "edit"
                editedText.value = '';
            } else {
                infoText.textContent = editedText.value;
                editForm.style.display = 'none';
            }
        });
    });

    /* image field*/
    var dt = new DataTransfer();
    var fileInputs = document.querySelectorAll('.input-file input[type=file]');
    fileInputs.forEach(function (input) {
        input.addEventListener('change', function () {
            var filesList = this.closest('.input-file').nextElementSibling;
            filesList.innerHTML = '';

            for (var i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                dt.items.add(file);

                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    var newFileInput = '<div class="input-file-list-item">' +
                        '<img class="input-file-list-img" src="' + reader.result + '">' +
                        '<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove" data-filename="' + file.name + '"></a>' +
                        '</div>';
                    filesList.insertAdjacentHTML('beforeend', newFileInput);
                };
            }
            this.files = dt.files;
        });
    });
});

function removeFilesItem(target) {
    var name = target.getAttribute('data-filename');
    var input = target.closest('.input-file-row').querySelector('input[type=file]');
    var filesList = input.closest('.input-file-row').querySelector('.input-file-list');
    var listItems = filesList.getElementsByClassName('input-file-list-item');
    var dt = new DataTransfer();
    for (var i = 0; i < dt.items.length; i++) {
        if (name === dt.items[i].getAsFile().name) {
            dt.items.remove(i);
            break;
        }
    }
    for (var j = 0; j < listItems.length; j++) {
        if (listItems[j].querySelector('.input-file-list-remove').getAttribute('data-filename') === name) {
            listItems[j].remove();
            break;
        }
    }
    input.files = dt.files;
}

document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.querySelector('.btn-add-address');
    const addAddressForm = document.querySelector('.add-address-form');

    addButton.addEventListener('click', function () {
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

/* payment page*/
document.addEventListener('DOMContentLoaded', function () {
    const cardNumInput = document.querySelector('.card-num');
    const nameInput = document.querySelector('.name');
    const dateInput = document.querySelector('.date');
    const secretCodeInput = document.querySelector('.secret-code');
    const submitButton = document.querySelector('.submit-button');
    const errorMessage = document.querySelector('.error-message');

    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();

            if (nameInput.value.trim() === '') {
                errorMessage.textContent = 'Please enter your name.';
                return;
            }

            if (!/^\d{2}\/\d{2}$/.test(dateInput.value)) {
                errorMessage.textContent = 'Please enter a valid date (MM/YY).';
                return;
            }

            if (!/^\d{3}$/.test(secretCodeInput.value)) {
                errorMessage.textContent = 'Please enter a valid security code (3 digits).';
                return;
            }

            errorMessage.textContent = '';
            alert('Payment successful!');
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

function addAddress() {
    var form = document.querySelector('.add-address-form');

    var firstNameInput = form.querySelector('#first-name');
    var lastNameInput = form.querySelector('#last-name');
    var phoneInput = form.querySelector('#phone');
    var emailInput = form.querySelector('#email');
    var streetInput = form.querySelector('#street');
    var suiteInput = form.querySelector('#suite');
    var cityInput = form.querySelector('#city');
    var stateInput = form.querySelector('#state');
    var zipCodeInput = form.querySelector('#zip-code');
    var countryInput = form.querySelector('#country');

    var fieldsToCheck = [firstNameInput, lastNameInput, phoneInput, emailInput, streetInput, suiteInput, cityInput, stateInput, zipCodeInput, countryInput];
    console.log(fieldsToCheck);

    var isValid = validateFields(fieldsToCheck);
    console.log(isValid);
    if (isValid) {
//Apt/Suite + Street, State (сокращенно) + City + ZIP + United States
        var fullAddress = (suiteInput.value ? 'Apt/Suite ' + suiteInput.value + ',' : '') +
            ' ' + streetInput.value + ', ' +
            stateInput.value + ' ' +
            cityInput.value + ' ' +
            zipCodeInput.value + ' United States';


        var newCard = document.createElement('div');
        newCard.className = 'shipping-card';
        newCard.innerHTML = `
                    <h5 data-street="${streetInput.value}" data-suite="${suiteInput.value}" data-sity="${cityInput.value}">${fullAddress}</h5>
                    <p>${cityInput.value}, ${stateInput.value}</p>
                    <p>${zipCodeInput.value}</p>
                    <p>${countryInput.value}</p>
                    <div class="checkbox-address">
                        <input type="checkbox">
                        <label for="address1"></label>
                    </div>
                `;
        shippingCardsContainer.appendChild(newCard);

        form.reset();
        form.style.display = 'none';
    }
}
function removeAdress() {

}


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
/*
        if (!allnumeric(zipCodeInput)) {
            zipCodeInput.classList.add('error');
        } else {
            zipCodeInput.classList.remove('error');
            console.log('Data submitted successfully!');
        }*/

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
