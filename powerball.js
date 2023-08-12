// script.js
const generateButton = document.getElementById('generate');
const numbersDiv = document.getElementById('numbers');

generateButton.addEventListener('click', generateNumbers);

function generateNumbers() {
    const numbers = [];
    while (numbers.length < 5) {
        const randomNumber = Math.floor(Math.random() * 69) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    numbers.push(Math.floor(Math.random() * 26) + 1);

    displayNumbers(numbers);
}

function displayNumbers(numbers) {
    const sortedNumbers = [...numbers].sort((a, b) => a -b);
    numbersDiv.innerHTML = `
        <p>White Balls: ${sortedNumbers.slice(0, 5).join(', ')}</p>
        <p>Powerball: ${numbers[5]}</p>
    `;
}
