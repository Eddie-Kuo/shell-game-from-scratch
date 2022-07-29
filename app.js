// import functions and grab DOM elements

const leftCardEl = document.getElementById('left-card');
const middleCardEl = document.getElementById('middle-card');
const rightCardEl = document.getElementById('right-card');

const leftButtEl = document.getElementById('left-button');
const middleButtEl = document.getElementById('middle-button');
const rightButtEl = document.getElementById('right-button');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const attemptsEl = document.getElementById('attempts');

const resetButt = document.getElementById('reset-button');
const resetScore = document.getElementById('score-reset');

// let state

const hidingPlaces = ['left', 'middle', 'right'];

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalAttempts = 0;

// set event listeners 

leftButtEl.addEventListener('click', () => {
    let answer = getRandomItem(hidingPlaces);
    handleGuess(answer, 'left');
});

middleButtEl.addEventListener('click', () => {
    let answer = getRandomItem(hidingPlaces);
    handleGuess(answer, 'middle');
});

rightButtEl.addEventListener('click', () => {
    let answer = getRandomItem(hidingPlaces);
    handleGuess(answer, 'right');
});

resetButt.addEventListener('click', () => {
    leftCardEl.src = './assets/card-back.png';
    middleCardEl.src = './assets/card-back.png';
    rightCardEl.src = './assets/card-back.png';
});

resetScore.addEventListener('click', () => {
    winsEl.textContent = 0;
    lossesEl.textContent = 0;
    attemptsEl.textContent = 0;
    correctGuesses = 0;
    incorrectGuesses = 0;
    totalAttempts = 0;
});



function getRandomItem(array) {
    const randomCard = Math.floor(Math.random() * array.length);
    return array[randomCard];
}

function handleGuess(correctSpot, userGuess) {
    if (correctSpot === userGuess) {
        correctGuesses++;
        totalAttempts++;
        winsEl.textContent = correctGuesses;
        attemptsEl.textContent = totalAttempts;
    } else {
        incorrectGuesses++;
        totalAttempts++;
        lossesEl.textContent = incorrectGuesses;
        attemptsEl.textContent = totalAttempts;
    }

    if (correctSpot === 'left') {
        leftCardEl.src = './assets/queen.png';
        middleCardEl.src = './assets/jack.png';
        rightCardEl.src = './assets/jack.png';
    } else if (correctSpot === 'middle') {
        leftCardEl.src = './assets/jack.png';
        middleCardEl.src = './assets/queen.png';
        rightCardEl.src = './assets/jack.png';
    } else if (correctSpot === 'right') {
        leftCardEl.src = './assets/jack.png';
        middleCardEl.src = './assets/jack.png';
        rightCardEl.src = './assets/queen.png';
    }
}







  // get user input













  // use user input to update state 
  // update DOM to reflect the new state




