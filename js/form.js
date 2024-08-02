document.getElementById('carForm').addEventListener('submit', sendCarForm);
document.getElementById('contactForm').addEventListener('submit', sendContactForm);
const result = document.querySelectorAll('.form-car__form-result')

const token = '5862490675:AAG7nuV9jxYlbWnk8OuxqabSvSAFdtwTeSY';
const chatId = '-4218623363';
const url = `https://api.telegram.org/bot${token}/sendMessage`;

async function sendCarForm(event) {
    event.preventDefault();

    const phone = document.getElementById('phone_form').value;
    const name = document.getElementById('name_form').value;
    const car = document.getElementById('car_form').value;
    const mileage = document.getElementById('mileage_form').value;

    if (!phone || !name || !car || !mileage) {
        alert('Пожалуйста, заполните все поля формы.');
        return; 
    }

    const message = `Заявка на выкуп авто\nТелефон: ${phone}\nИмя: ${name}\nМашина: ${car}\nПробег: ${mileage}`;

    await sendTelegramMessage(message);
    document.getElementById('carForm').reset();
}

async function sendContactForm(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const name = document.getElementById('name').value;


    const message = `Сайт - автовыкупкиров.рф\n\nЗаявка на обратный звонок\n\nТелефон: ${phone}\nИмя: ${name}`;

    await sendTelegramMessage(message);
    document.getElementById('contactForm').reset();
}

async function sendTelegramMessage(message) {
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

        if (response.ok) {
            result.forEach(el => el.innerHTML = "заявка отправлена")
        } else {
            alert('Ошибка при отправке заявки');
            console.error('Response status:', response.status);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Ошибка при отправке заявки');
    }
}
