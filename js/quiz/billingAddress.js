
function addAddress(id = 0) {

    var shippingCardsContainer = document.getElementById('shippingCardsContainer');
    var shippingCards = shippingCardsContainer.querySelectorAll('.shipping-card');
    var shippingCardsCount = shippingCards.length;
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
    var isValid = validateFields(fieldsToCheck);

    if (isValid) {

        localStorage.setItem("userFirstName", firstNameInput.value);
        localStorage.setItem("userLastName", lastNameInput.value);

        var fullAddress = (suiteInput.value ? 'Apt/Suite ' + suiteInput.value + ',' : '') +
            ' ' + streetInput.value + 'st. , ' +
            stateInput.value + ', ' +
            cityInput.value + ', ' +
            zipCodeInput.value + ', United States';

        var newCard = document.createElement('div');
        newCard.className = 'shipping-card';
        newCard.setAttribute( 'data-suite', suiteInput.value);
        newCard.setAttribute( 'data-street', streetInput.value);
        newCard.setAttribute( 'data-state', stateInput.value);
        newCard.setAttribute( 'data-sity', cityInput.value);
        newCard.setAttribute( 'data-zip', zipCodeInput.value);

        newCard.innerHTML = `
                    <h5>${fullAddress}</h5>
                    <p>${cityInput.value}, ${stateInput.value}</p>
                    <p>${zipCodeInput.value}</p>
                    <p>${countryInput.value}</p>
                    <div class="checkbox-address">
                        <input id="address_${shippingCardsCount}" name="address" type="radio">
                        <label for="address_${shippingCardsCount}"></label>
                    </div>
                `;
        shippingCardsContainer.appendChild(newCard);
        addEditHandler(newCard);

        form.reset();
        form.style.display = 'none';
    }
}

const addressCards = document.querySelectorAll('.shipping-card');

addressCards.forEach(card => {
    card.addEventListener('click', () => {
        const suite = card.getAttribute('data-suite');
        const street = card.getAttribute('data-street');
        const state = card.getAttribute('data-state');
        const city = card.getAttribute('data-city');
        const zip = card.getAttribute('data-zip');

        document.getElementById('suite').value = suite;
        document.getElementById('street').value = street;
        document.getElementById('state').value = state;
        document.getElementById('city').value = city;
        document.getElementById('zip-code').value = zip;

        const editForm = document.querySelector('.add-address-form');
        editForm.style.display = 'block';
    });
});


function removeAddress() {
}



function addEditHandler(card) {
    card.addEventListener('click', () => {

        const addButton = document.querySelector('.btn-add-address');
        const addAddressForm = document.querySelector('.add-address-form');
        addButton.addEventListener('click', function () {
            addAddressForm.style.display = 'block';
        });

        const saveButton = document.querySelector('#editAddress');
        saveButton.addEventListener('click', () => {
            saveChanges(card);
        });
    });
}

function updateCard(card, suite, street, state, city, zip) {
    const h5 = card.querySelector('h5');
    const cityP = card.querySelector('p:first-of-type');
    const zipP = card.querySelector('p:nth-of-type(2)');

    h5.textContent = `Apt/Suite ${suite}, ${street}, ${state}, ${city}, ${zip}, United States`;
    cityP.textContent = `${city}, ${state}`;
    zipP.textContent = zip;
}

function saveChanges(card) {

    localStorage.setItem("userFirstName", firstNameInput.value);
    localStorage.setItem("userLastName", lastNameInput.value);

    const suiteInput = document.querySelector('#suite');
    const streetInput = document.querySelector('#street');
    const stateInput = document.querySelector('#state');
    const cityInput = document.querySelector('#city');
    const zipInput = document.querySelector('#zip-code');

    const suite = suiteInput.value;
    const street = streetInput.value;
    const state = stateInput.value;
    const city = cityInput.value;
    const zip = zipInput.value;

    card.setAttribute('data-suite', suite);
    card.setAttribute('data-street', street);
    card.setAttribute('data-state', state);
    card.setAttribute('data-city', city);
    card.setAttribute('data-zip', zip);

    localStorage.setItem("firstName", firstNameInput.value);
    localStorage.setItem("lastName", lastNameInput.value);

    updateCard(card, suite, street, state, city, zip);

    const addButton = document.querySelector('.btn-add-address');
    const addAddressForm = document.querySelector('.add-address-form');
    addButton.addEventListener('click', function () {
        addAddressForm.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const addressCards = document.querySelectorAll('.shipping-card');

    addressCards.forEach(card => {
        card.addEventListener('click', () => {

        const addButton = document.querySelector('.btn-add-address');
        const addAddressForm = document.querySelector('.add-address-form');
        addButton.addEventListener('click', function () {
            addAddressForm.style.display = 'block';
        });

        const saveButton = document.querySelector('#editAddress');
            saveButton.addEventListener('click', () => {
                saveChanges(card);
            });
        });
    });
});





/* delete card with address */
var deleteButtons = document.querySelectorAll('.delete-address-btn');
deleteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var shippingCard = button.closest('.shipping-card');
        if (shippingCard) {
            shippingCard.remove();
        }
    });
});

/* remove error class*/
var inputElements = document.querySelectorAll('input, select');
inputElements.forEach(function(element) {
    element.addEventListener('input', function() {
        if (element.classList.contains('error') && element.value.trim() !== '') {
            element.classList.remove('error');
        }
    });
});

/* select first address */
var addressRadios = document.querySelectorAll('input[type="radio"][name="address"]');
if (addressRadios.length > 0) {
    addressRadios[0].checked = true;
}