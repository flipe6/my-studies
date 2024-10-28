let num1 = '';
let num2 = '';
let operator = '';
let result = 0;
let display = document.getElementById('result');

document.addEventListener('DOMContentLoaded', () => {
    display.value = 0;
})

document.querySelector('.eraser').addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    result = 0;
    display.value = 0; // Limpa o display
});

document.querySelectorAll('.clicavel').forEach(item => {
    item.addEventListener('click', (e) => {
        const num = e.target.getAttribute('data-number');
        const op = e.target.getAttribute('data-operator');

        // Se o botão clicado contém um número
        if (num !== null) {
            if (operator === '') {
                num1 += num;
                display.value = num1; // Exibe num1 no display
            } else {
                num2 += num;
                display.value = `${num1} ${operator} ${num2}`; // Exibe num1, operador e num2 no display
            }
        }

        // Se o botão clicado contém um operador
        if (op !== null && num1 !== '') {
            operator = op;
            display.value = `${num1} ${operator}`; // Exibe num1 com o operador
        }
    });
});
document.querySelector('.equals').addEventListener('click', () => {
    if (num1 !== '' && num2 !== '' && operator !== '') {
        
        if (operator === '+') {
            result = Number(num1) + Number(num2);
        } else if (operator === '-') {
            result = Number(num1) - Number(num2);
        } else if (operator === 'x') {
            result = Number(num1) * Number(num2);
        } else if (operator === '/') {
            result = Number(num1) / Number(num2);
        }
        display.value = result;
        num1 = result;
        num2 = '';
        operator = '';
    }
})