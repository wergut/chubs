var swiper = new Swiper(".sidebar-slider", {
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper1 = new Swiper(".medications-taken-slider", {
    spaceBetween: 30,
    slidesPerView: 1.75,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
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
    const cardContents = document.querySelectorAll('.card-content');

    cardContents.forEach(function (cardContent) {
        const cardNumber = cardContent.textContent;

        cardContent.style.visibility = 'hidden';

        if (cardNumber.replace(/\s+/g, '').length >= 16) {
            const visibleDigits = 4;
            const maskedChars = '●';
            const cardNumberWithoutSpaces = cardNumber.replace(/\s+/g, '');

            const maskedPart = cardNumberWithoutSpaces
                .slice(0, -visibleDigits)
                .replace(/\d/g, maskedChars);

            const visiblePart = cardNumberWithoutSpaces.slice(-visibleDigits);

            const maskedCardNumber = maskedPart + visiblePart;
            const formattedCardNumber = maskedCardNumber.replace(/(.{4})/g, '$1 ');

            cardContent.textContent = formattedCardNumber;

            cardContent.style.visibility = 'visible';
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelector('.tabs');
    const personalCard = document.querySelector('.personal-card');

    function handleSidebar(selectedTab) {
        const sideId = selectedTab.getAttribute('data-side-id');

        if (sideId) {
            const sidebar = document.querySelector('#'+sideId);

            if (sidebar) {
                console.log('block')
                sidebar.style.display = 'block';
                personalCard.classList.add('show-sidebar');
            }

        } else {
            console.log('none')
            document.querySelector('.sidebars').style.display = 'none';
            personalCard.classList.remove('show-sidebar');
        }

    }

    tabs.addEventListener('click', function (event) {
        if (event.target.classList.contains('tabs__btn')) {
            const selectedTab = event.target;
            handleSidebar(selectedTab);
        }
    });

    const initialTab = document.querySelector('.tabs__btn_active');
    handleSidebar(initialTab);
});


document.addEventListener('DOMContentLoaded', function () {
    const linkSubscriptionMores = document.querySelectorAll('.link-subscription-more');
    const btnSubscriptionsBacks = document.querySelectorAll('.btn-subscriptions-back');

    linkSubscriptionMores.forEach(function (link) {
        link.addEventListener('click', function () {
            const allSubscriptionDetails = document.querySelectorAll('.subscription-details');
            allSubscriptionDetails.forEach(function (subscriptionDetails) {
                subscriptionDetails.style.display = 'none';
            });


            const subscriptionDetails = link.closest('.toggle-block').nextElementSibling;
            if (subscriptionDetails) {
                subscriptionDetails.style.display = 'block';
                link.closest('.toggle-block').style.display = 'none';
            }
        });
    });

    btnSubscriptionsBacks.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const allSubscriptionDetails = document.querySelectorAll('.subscription-details');
            allSubscriptionDetails.forEach(function (subscriptionDetails) {
                subscriptionDetails.style.display = 'none';
            });

            const toggleBlock = btn.closest('.subscription-details').previousElementSibling;
            if (toggleBlock) {
                toggleBlock.style.display = 'block';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const linkSubscriptionMores = document.querySelectorAll('.link-subscription-more');
    const subscriptionDetails = document.querySelectorAll('.subscription-details');

    linkSubscriptionMores.forEach(function (link) {
        link.addEventListener('click', function () {
            const subId = link.getAttribute('data-sub-href');
            const detailsBlock = document.querySelector(`[data-sub-id="${subId}"]`);

            if (detailsBlock) {
                subscriptionDetails.forEach(function (detail) {
                    detail.style.display = 'none';
                });

                detailsBlock.style.display = 'block';
            }
        });
    });
});





    /*accordeon */

var accordion = (function(element) {
    var _getItem = function(elements, className) {
        var element = undefined;
        elements.forEach(function(item) {
            if (item.classList.contains(className)) {
                element = item;
            }
        });
        return element;
    };
    return function() {
        var _mainElement = {}, // .accordion
            _items = {}, // .accordion-item
            _contents = {}; // .accordion-item-content
        var _actionClick = function(e) {
                if (!e.target.classList.contains('accordion-item-header')) {
                    return;
                }
                if (e.target.classList.contains(('accordion-item-content'))) {
                    return false;
                }
                e.preventDefault();
                var header = e.target,
                    item = header.parentElement,
                    itemActive = _getItem(_items, 'show');
                if (itemActive === undefined) {
                    item.classList.add('show');
                } else {
                    itemActive.classList.remove('show');
                    if (itemActive !== item) {
                        item.classList.add('show');
                    }
                }
            },
            _setupListeners = function() {
                _mainElement.addEventListener('click', _actionClick);
            };

        return {
            init: function(element) {
                _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
                _items = _mainElement.querySelectorAll('.accordion-item');
                _setupListeners();
            }
        }
    }
})();


const elements = document.querySelectorAll(".accordion");
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    accordion().init(element);
}