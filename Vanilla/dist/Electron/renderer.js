document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('inputNumber');
    const sendButton = document.getElementById('sendButton');
    const resultElement = document.getElementById('result');
    sendButton.addEventListener('click', () => {
        const number = parseFloat(inputElement.value);
        if (!isNaN(number)) {
            window.electronAPI.sendNumber(number);
        }
        else {
            resultElement.textContent = 'Por favor, insira um número válido';
        }
    });
    window.electronAPI.onReceiveDoubled((event, doubled) => {
        resultElement.textContent = doubled.toString();
    });
});
export {};
