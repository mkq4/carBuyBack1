
const encryptedToken = "NTg2MjQ5MDY3NTpBQUc3bnVWOWp4WWxiV25rOE91eHFhYlN2U0FGZHR3VGVTWQ==";
const encryptedChatId = "Njk4ODQ1NjM5NQ==";

function decryptBase64(encodedStr) {
    return atob(encodedStr);
}

function getData() {
    return {
        token: decryptBase64(encryptedToken),
        chatId: decryptBase64(encryptedChatId)
    };
}

export const data = getData();
