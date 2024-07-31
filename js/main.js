// script.js


document.addEventListener('DOMContentLoaded', () => {
    const openPopupButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');
    const sliderButton = document.getElementById("slider-button")
    const burgerIcon = document.getElementById('burgerIcon');
    const burgerMenu = document.getElementById('burgerMenu');
    const closeBurger = document.getElementById('closeBurger');
    const processLink = document.getElementById('process__link');

    burgerIcon.addEventListener('click', () => {
        burgerMenu.style.display = 'flex';
        document.body.style.overflow = 'hidden'
    });
    processLink.addEventListener('click', () => {
        burgerMenu.style.display = 'none';
        document.body.style.overflow = 'scroll'
    })
    closeBurger.addEventListener('click', () => {
        burgerMenu.style.display = 'none';
        document.body.style.overflow = 'scroll'
    });

    // Открытие попапа
    sliderButton.addEventListener('click', function() {
        popup.style.display = 'block';
    });
    openPopupButton.addEventListener('click', function() {
        popup.style.display = 'block';
    });
    // Закрытие попапа
    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
    // Закрытие попапа при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });


});