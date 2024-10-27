let num1 = '';
let num2 = '';
let operator = '';

// Seleciona automaticamente o campo de entrada ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#result').focus();
});

// Captura números e operadores ao clicar
document.querySelectorAll('.clicavel').forEach((item) => {
    item.addEventListener('click', (e) => {
        let number = e.target.getAttribute('data-number');
        let op = e.target.getAttribute('data-operator');
        const display = document.querySelector('#result');

        // Se o botão clicado for um número
        if (number !== null) {
            if (operator === '') {
                num1 += number; // Concatena os números no primeiro número
                display.value = num1;
            } else {
                num2 += number; // Concatena os números no segundo número
                display.value = num2;
            }
        }

        // Se o botão clicado for um operador
        if (op !== null) {
            if (num1 !== '') { // Apenas permite mudar de operador se num1 já foi preenchido
                operator = op;
                display.value = operator; // Mostra o operador
            }
        }
    });
});

// Captura a tecla Enter para calcular
document.querySelector('#result').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const display = document.querySelector('#result');
        if (num1 !== '' && operator !== '' && num2 !== '') {
            let expression = `${num1}${operator}${num2}`;
            calculateExpression(expression);
            e.preventDefault(); // Evita o envio de formulário ou outras ações padrão
        }
    }
});

// Limpa o display e os valores
document.querySelector('.eraser').addEventListener('click', () => {
    document.querySelector('#result').value = ''; // Limpa o display
    num1 = '';
    num2 = '';
    operator = '';
});

// Calcula o resultado ao clicar no botão de igual
document.querySelector('.equals').addEventListener('click', () => {
    const display = document.querySelector('#result');
    if (num1 !== '' && operator !== '' && num2 !== '') {
        let expression = `${num1}${operator}${num2}`;
        calculateExpression(expression);
    }
});

// Função para calcular a expressão usando math.evaluate
function calculateExpression(expression) {
    const display = document.querySelector('#result');
    try {
        // Substitui 'x' por '*' e '÷' por '/' para o Math.js reconhecer os operadores
        expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
        
        // Avalia a expressão usando Math.js e exibe o resultado
        let result = math.evaluate(expression);
        display.value = result;

        // Armazena o resultado como novo num1 para novas operações
        num1 = result.toString();
        num2 = '';
        operator = '';
    } catch (error) {
        display.value = 'Erro';
    }
}