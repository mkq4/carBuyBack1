// script.js
document.addEventListener('DOMContentLoaded', function() {
    const openPopupButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');
    const sliderButton = document.getElementById("slider-button")
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

    // Обработка отправки формы

    


});
