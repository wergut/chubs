var swiper = new Swiper(".sidebar-slider", {
    pagination: {
        el: ".swiper-pagination",
    },
});



document.addEventListener('DOMContentLoaded', function () {
    const infoBlocks = document.querySelectorAll('.input-js');

    infoBlocks.forEach(function (infoBlock, index, array) {
        const infoText = infoBlock.querySelector('.input-text');
        const editButton = infoBlock.querySelector('.edit-button');
        const editForm = infoBlock.querySelector('.edit-form');
        const editedText = infoBlock.querySelector('.edited-text');

        function saveAndCloseForm() {
            infoText.textContent = editedText.value;
            editForm.style.display = 'none';

            if (index < array.length - 1) {
                const nextInputItem = array[index + 1].closest('.input-item');
                if (nextInputItem) {
                    nextInputItem.classList.remove('mt-40');
                }
            }
        }

        editButton.addEventListener('click', function () {
            if (editForm.style.display === 'none' || editForm.style.display === '') {
                editForm.style.display = 'block';
                editedText.value = infoText.textContent;
                editedText.focus();

                if (index < array.length - 1) {
                    const nextInputItem = array[index + 1].closest('.input-item');
                    if (nextInputItem) {
                        nextInputItem.classList.add('mt-40');
                    }
                }
            } else {
                saveAndCloseForm();
            }
        });

        editedText.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                saveAndCloseForm();
            }
        });
    });
});



class ItcTabs {
    constructor(target, config) {
        const defaultConfig = {};
        this._config = Object.assign(defaultConfig, config);
        this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
        this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
        this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
        this._eventShow = new Event('tab.itc.change');
        this._init();
        this._events();
    }
    _init() {
        this._elTabs.setAttribute('role', 'tablist');
        this._elButtons.forEach((el, index) => {
            el.dataset.index = index;
            el.setAttribute('role', 'tab');
            this._elPanes[index].setAttribute('role', 'tabpanel');
        });
    }
    show(elLinkTarget) {
        const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
        const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
        const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
        if (elLinkTarget === elLinkActive) {
            return;
        }
        elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
        elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
        elLinkTarget.classList.add('tabs__btn_active');
        elPaneTarget.classList.add('tabs__pane_show');
        this._elTabs.dispatchEvent(this._eventShow);
        elLinkTarget.focus();
    }
    showByIndex(index) {
        const elLinkTarget = this._elButtons[index];
        elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
        this._elTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.tabs__btn');
            if (target) {
                e.preventDefault();
                this.show(target);
            }
        });
    }
}

const tabs = document.querySelectorAll('.tabs');
for (let i = 0, length = tabs.length; i < length; i++) {
    new ItcTabs(tabs[i]);
}


document.addEventListener('DOMContentLoaded', function () {
    const cardContent = document.querySelector('.card-content');
    const cardNumber = cardContent.textContent;

    // Скрываем элемент .card-content изначально
    cardContent.style.visibility = 'hidden';

    // Проверка, что карта имеет хотя бы 16 символов
    if (cardNumber.replace(/\s+/g, '').length >= 16) {
        const visibleDigits = 4;
        const maskedChars = '●';
        const cardNumberWithoutSpaces = cardNumber.replace(/\s+/g, '');

        const maskedPart = cardNumberWithoutSpaces
            .slice(0, -visibleDigits) // Получаем все символы, кроме последних 4
            .replace(/\d/g, maskedChars); // Заменяем все цифры символами "●"

        const visiblePart = cardNumberWithoutSpaces.slice(-visibleDigits); // Получаем последние 4 символа

        const maskedCardNumber = maskedPart + visiblePart; // Соединяем маскированную и видимую части
        const formattedCardNumber = maskedCardNumber.replace(/(.{4})/g, '$1 '); // Добавляем пробелы каждые 4 символа

        cardContent.textContent = formattedCardNumber;

        // Делаем элемент .card-content видимым
        cardContent.style.visibility = 'visible';
    }
});