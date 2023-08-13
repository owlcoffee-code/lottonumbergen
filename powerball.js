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

    let powerBall;
    do {
        powerBall = Math.floor(Math.random() * 26) + 1;
    } while (numbers.includes(powerBall)); //ensure powerball is not in the white balls
    numbers.push(powerBall);

    displayNumbers(numbers);
}

function displayNumbers(numbers) {
    const whiteBalls = [...numbers].slice(0, 5).sort((a,b) => a -b);
    const powerBall = numbers[5];
    numbersDiv.innerHTML = `
        <p>White Balls: ${whiteBalls.join(', ')}</p>
        <p>Powerball: ${powerBall}</p>
    `;
}
