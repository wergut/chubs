
function addAddress() {

    var shippingCardsContainer = document.getElementById('shippingCardsContainer');
    var shippingCards = shippingCardsContainer.querySelectorAll('.shipping-card');
    var shippingCardsCount = shippingCards.length;
    console.log(shippingCardsCount);

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

        var fullAddress = (suiteInput.value ? 'Apt/Suite ' + suiteInput.value + ',' : '') +
            ' ' + streetInput.value + 'st. , ' +
            stateInput.value + ', ' +
            cityInput.value + ', ' +
            zipCodeInput.value + ', United States';


        var newCard = document.createElement('div');
        newCard.className = 'shipping-card';
        newCard.innerHTML = `
                    <h5 
                    data-suite="${suiteInput.value}"
                    data-street="${streetInput.value}" 
                    data-state="${stateInput.value}" 
                    data-sity="${cityInput.value}"
                    data-zip="${zipCodeInput.value}"
                    >${fullAddress}</h5>
                    <p>${cityInput.value}, ${stateInput.value}</p>
                    <p>${zipCodeInput.value}</p>
                    <p>${countryInput.value}</p>
                    <div class="checkbox-address">
                        <input id="address_${shippingCardsCount}" name="address" type="radio">
                        <label for="address_${shippingCardsCount}"></label>
                    </div>
                `;
        shippingCardsContainer.appendChild(newCard);

        form.reset();
        form.style.display = 'none';
    }
}
function removeAddress() {

}


var inputElements = document.querySelectorAll('input, select');

inputElements.forEach(function(element) {
    element.addEventListener('input', function() {

        if (element.classList.contains('error') && element.value.trim() !== '') {
            element.classList.remove('error');
        }
    });
});