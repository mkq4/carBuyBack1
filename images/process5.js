// Шифрованные строки (в base64)
const encryptedToken = "NTg2MjQ5MDY3NTpBQUc3bnVWOWp4WWxiV25rOE91eHFhYlN2U0FGZHR3VGVTWQ==";
const encryptedChatId = "Njk4ODQ1NjM5NQ==";

// Функция для расшифровки base64 строки
function decryptBase64(encodedStr) {
    return atob(encodedStr);
}

// Функция для получения данных
function getData() {
    return {
        token: decryptBase64(encryptedToken),
        chatId: decryptBase64(encryptedChatId)
    };
}

// Экспортируем данные
export const data = getData();
