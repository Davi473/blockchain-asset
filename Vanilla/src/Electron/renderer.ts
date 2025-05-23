declare global {
  interface Window {
    electronAPI: {
      sendNumber: (number: number) => void;
      onReceiveDoubled: (callback: (event: any, doubled: number) => void) => void;
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.getElementById('inputNumber') as HTMLInputElement;
  const sendButton = document.getElementById('sendButton') as HTMLButtonElement;
  const resultElement = document.getElementById('result') as HTMLSpanElement;

  sendButton.addEventListener('click', () => {
    const number = parseFloat(inputElement.value);
    if (!isNaN(number)) {
      window.electronAPI.sendNumber(number);
    } else {
      resultElement.textContent = 'Por favor, insira um número válido';
    }
  });

  window.electronAPI.onReceiveDoubled((event: any, doubled: number) => {
    resultElement.textContent = doubled.toString();
  });
});

export {};
