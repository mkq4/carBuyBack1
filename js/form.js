// require("dotenv").config();
// import {TOKEN} from './env.js'
import {data} from "../images/process5.js";

document.addEventListener('DOMContentLoaded', () => {
    console.log(data);
    try {
        document.getElementById('carForm').addEventListener('submit', sendCarForm);
    }
    catch(err) {
        console.log(err)
    }
    document.getElementById('contactForm').addEventListener('submit', sendContactForm);
    const result = document.querySelectorAll('.form-car__form-result')
    


    
    async function sendCarForm(event) {
        event.preventDefault();
    
        const phone = document.getElementById('phone_form').value;
        const name = document.getElementById('name_form').value;
        const car = document.getElementById('car_form').value;
        const mileage = document.getElementById('mileage_form').value;
    
        if (!phone || !car) {
            alert('Пожалуйста, заполните все поля формы.');
            return; 
        }
    
        const message = `Сайт - автовыкупкиров.рф\n\nЗаявка на выкуп авто\n\nТелефон: ${phone}\nИмя: ${name}\nМашина: ${car}\nЦена: ${mileage}`;
    
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
    const url = `https://api.telegram.org/bot${data.token}/sendMessage`;
    async function sendTelegramMessage(message) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: data.chatId,
                    text: message
                })
            });
    
            if (response.ok) {
                res.status(200).json({ success: 'Message sent successfully' });
            } else {
                console.error('Response status:', response.status);
                res.status(response.status).json({ error: 'Error sending message' });
            }
        } catch (error) {
            console.error('Fetch error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    
})
