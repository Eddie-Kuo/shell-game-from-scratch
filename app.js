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

// let state

const hidingPlaces = ['left', 'middle', 'right'];

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalAttempts = 0;

// set event listeners 







  // get user input













  // use user input to update state 
  // update DOM to reflect the new state





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
}
