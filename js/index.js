/*accordeon */

var accordion = (function (element) {
    var _getItem = function (elements, className) {
        var element = undefined;
        elements.forEach(function (item) {
            if (item.classList.contains(className)) {
                element = item;
            }
        });
        return element;
    };
    return function () {
        var _mainElement = {}, // .accordion
            _items = {}, // .accordion-item
            _contents = {}; // .accordion-item-content
        var _actionClick = function (e) {
                if (!e.target.classList.contains('accordion-item-header')) {
                    return;
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
            _setupListeners = function () {
                _mainElement.addEventListener('click', _actionClick);
            };

        return {
            init: function (element) {
                _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
                _items = _mainElement.querySelectorAll('.accordion-item');
                _setupListeners();
            }
        }
    }
})();

var accordion1 = accordion();
if (document.getElementById('accordion1')) {
    accordion1.init('#accordion1');
}
var accordion2 = accordion();
if (document.getElementById('accordion2')) {
    accordion2.init('#accordion2');
}

const btn = document.querySelectorAll(".accordion-item");

btn.forEach(i => {
    i.addEventListener("click", function() {
        const parent = i.parentNode;

        if (parent.classList.contains("show")) {
            parent.classList.remove("show")
        } else {
            document.querySelectorAll(".accordion-item").forEach((child) => child.classList.remove("show"))
            parent.classList.add("show")
        }
    })
})




var swiper1 = new Swiper(".reviews-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freemode: true,
    loop: 1,
    pagination: {
        el: ".reviews-slider .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});
var swiper2 = new Swiper(".experts-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: 1,
    freemode: true,
    pagination: {
        el: ".experts-slider .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});


var n1 = true,
    n2 = true;
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();


    if ((scroll >=  700) && (n1)) {
        $('.about .spinner-wrapper').addClass('d-none');
        $('.about .spinner-container').removeClass('d-none');
        $('.about .spinner-container').addClass('d-flex');


        $(".dial").knob();
        $({animatedVal: 0}).animate({animatedVal: 52}, {
            duration: 2000,
            easing: "swing",
            step: function() {
                $(".dial").val(Math.ceil(this.animatedVal)).trigger("change");
            }
        });
        n1 = false;
    }
    if ((scroll >=  3200) && (n2)) {

        $('.results .spinner-wrapper').addClass('d-none');
        $('.results .spinner-container').removeClass('d-none');
        $('.results .spinner-container').addClass('d-flex');


        $(".dial1").knob();
        $({animatedVal: 0}).animate({animatedVal: 75}, {
            duration: 2000,
            easing: "swing",
            step: function() {
                $(".dial1").val(Math.ceil(this.animatedVal)).trigger("change");
            }
        });
        n2 = false;
    }
})
var selectorx = $('.select_states').select2();


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}


const input = document.querySelector(".phone-num");

const prefixNumber = (str) => {
    if (str === "1") {
        return "1 (";
    }
    if (str === "8") {
        return "8 (";
    }
    if (str === "9") {
        return "1 (9";
    }
    return "1 (";
};

// ======================================
input.addEventListener("input", (e) => {
    const value = input.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    if (input.value.includes("+8") || input.value[0] === "8") {
        result = "";
    } else {
        result = "+";
    }

    //
    for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
            case 0:
                result += prefixNumber(value[i]);
                continue;
            case 4:
                result += ") ";
                break;
            case 7:
                result += "-";
                break;
            case 9:
                result += "-";
                break;
            default:
                break;
        }
        result += value[i];
    }
    //
    input.value = result;
});
