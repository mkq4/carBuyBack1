// script.js
document.addEventListener('DOMContentLoaded', function() {
    const openPopupButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');
    const sliderButton = document.getElementById("slider-button")
    document.querySelector('form').addEventListener('submit', sendEmailTelegram);
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

    async function sendEmailTelegram(event) {
        event.preventDefault();
    
        const phone = document.getElementById('phone_form').value;
        const name = document.getElementById('name_form').value;
        const car = document.getElementById('car_form').value;
        const mileage = document.getElementById('mileage_form').value;
    
        const message = `Заявка на выкуп авто\nТелефон: ${phone}\nИмя: ${name}\nМашина: ${car}\nПробег: ${mileage}`;
    
        const token = '5862490675:AAG7nuV9jxYlbWnk8OuxqabSvSAFdtwTeSY';
        const chatId = '1059407854';
    
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            });
            console.log('Phone:', phone);
            console.log('Name:', name);
            console.log('Car:', car);
            console.log('Mileage:', mileage);
            if (response.ok) {
                alert('Заявка отправлена');
            } else {
                alert('Ошибка при отправке заявки');
                console.error('Response status:', response.status);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Ошибка при отправке заявки');
        }
    }

});
