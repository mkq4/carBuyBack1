// script.js


document.addEventListener('DOMContentLoaded', () => {
    const openPopupButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');
    const sliderButton = document.getElementById("slider-button")
    const burgerIcon = document.getElementById('burgerIcon');
    const burgerMenu = document.getElementById('burgerMenu');
    const closeBurger = document.getElementById('closeBurger');
    
    burgerIcon.addEventListener('click', () => {
        burgerMenu.style.display = 'flex';
    });
    
    closeBurger.addEventListener('click', () => {
        burgerMenu.style.display = 'none';
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