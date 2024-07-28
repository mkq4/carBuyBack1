document.getElementById('carForm').addEventListener('submit', sendContactTelegram);
document.getElementById('contactForm').addEventListener('submit', sendContactTelegram);


const token = '5862490675:AAG7nuV9jxYlbWnk8OuxqabSvSAFdtwTeSY';
const chatId = '-4218623363';
const url = `https://api.telegram.org/bot${token}/sendMessage`;

async function sendContactTelegram(event) {
    event.preventDefault();

    let phone = document.getElementById('phone_form').value;
    let name = document.getElementById('name_form').value;
    let car = document.getElementById('car_form').value;
    let mileage = document.getElementById('mileage_form').value;
    let message = `Заявка на выкуп авто\nТелефон: ${phone}\nИмя: ${name}\nМашина: ${car}\nПробег: ${mileage}`;
    if(car === '' && mileage === '') {
        phone = document.getElementById('phone').value;
        name = document.getElementById('name').value;
        message = `Заявка на обратный звонок\nТелефон: ${phone}\nИмя: ${name}`;
    } 
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
            // alert('Заявка отправлена');
            console.log(message)
            console.log(name, phone, car, mileage)
            document.getElementById('carForm').reset();
        } else {
            alert('Ошибка при отправке заявки');
            console.error('Response status:', response.status);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Ошибка при отправке заявки');
    }
}

