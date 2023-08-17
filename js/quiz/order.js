document.addEventListener('DOMContentLoaded', function () {
    const infoBlocks = document.querySelectorAll('.input-js');

    infoBlocks.forEach(function (infoBlock) {
        const infoText = infoBlock.querySelector('.input-text');
        const editButton = infoBlock.querySelector('.edit-button');
        const editForm = infoBlock.querySelector('.edit-form');
        const editedText = infoBlock.querySelector('.edited-text');

        editButton.addEventListener('click', function () {
            if (editForm.style.display === 'none' || editForm.style.display === '') {
                editForm.style.display = 'block';
                editedText.value = infoText.textContent;
                editedText.focus();
                event.preventDefault();
            } else {
                infoText.textContent = editedText.value;
                editForm.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
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
});

document.addEventListener('DOMContentLoaded', function () {
    const paymentTypeBtn = document.querySelector('.payment-type-btn');
    const hiddenDesc = document.querySelector('.subscriptions-section .payment-hidden-desc');

    paymentTypeBtn.addEventListener('click', function () {
        hiddenDesc.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const secretCodeInput = document.querySelector('.secret-code');
    const toggleCodeBtn = document.querySelector('.toggle-code-btn');

    toggleCodeBtn.addEventListener('click', function () {
        if (secretCodeInput.type === 'password') {
            secretCodeInput.type = 'text';
            toggleCodeBtn.classList.add('active');
        } else {
            secretCodeInput.type = 'password';
            toggleCodeBtn.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cardNumInput = document.querySelector('.card-num');
    const nameInput = document.querySelector('.name');
    const dateInput = document.querySelector('.date');
    const secretCodeInput = document.querySelector('.secret-code');
    const submitButton = document.querySelector('.submit-button');
    const errorMessage = document.querySelector('.error-message');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Проверка на валидность номера карты (проверка на число и длину)
        const cardNumValue = cardNumInput.value.replace(/\s/g, ''); // Убираем пробелы
        if (!/^\d{16}$/.test(cardNumValue)) {
            errorMessage.textContent = 'Please enter a valid card number (16 digits).';
            return;
        }

        // Проверка на заполнение имени
        if (nameInput.value.trim() === '') {
            errorMessage.textContent = 'Please enter your name.';
            return;
        }

        // Проверка на валидность даты (проверка на формат)
        if (!/^\d{2}\/\d{2}$/.test(dateInput.value)) {
            errorMessage.textContent = 'Please enter a valid date (MM/YY).';
            return;
        }

        // Проверка на валидность кода безопасности (проверка на число и длину)
        if (!/^\d{3}$/.test(secretCodeInput.value)) {
            errorMessage.textContent = 'Please enter a valid security code (3 digits).';
            return;
        }

        // Все поля заполнены корректно, можно отправить данные на сервер или выполнить другую логику
        errorMessage.textContent = '';
        alert('Payment successful!');
    });
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