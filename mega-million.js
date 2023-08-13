//mega-million
const generateButton = document.getElementById('generate');
const numbersDiv = document.getElementById('numbers');

generateButton.addEventListener('click', generateNumbers);

function generateNumbers(){
    const numbers = [];
    while(numbers.length < 5){
        const randomNumber = Math.floor(Math.random() * 70) + 1;
        if(!numbers.includes(randomNumber)){
            numbers.push(randomNumber);
        }
    }
    let megaBall;
    do {
        megaBall = Math.floor(Math.random() * 25) + 1;
    }while(numbers.includes(megaBall));
    numbers.push(megaBall);
    displayNumbers(numbers);
}

function displayNumbers(numbers) {
    const whiteBalls = [...numbers].slice(0, 5).sort((a,b) => a - b);
    const megaBall = numbers[5];
    numbersDiv.innerHTML = `
    <p>White Balls: ${whiteBalls.join( ', ' )}</p>
    <p>Mega Ball: ${megaBall}</p>
    `
}