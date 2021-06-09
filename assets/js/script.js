// Array of deck of card images
const deckCards = ["black-rose.jpg", "black-rose.jpg", "green-rose.jpg", "green-rose.jpg", "pink-rose.jpg", "pink-rose.jpg", "red-rose.png", "red-rose.png", "white-rose.jpg", "white-rose.jpg", "yellow-rose.jpg", "yellow-rose.jpg",];
// global Arrays
// access the <ul> with the class of .deck
let deck = document.querySelector(".deck");

//create an empty Array to store the opened cards
let opened = [];

// create an empty Array to store the matched cards
let matched = [];

// Access the model
let modal = document.getElementById("model");
// Access the reset button
let reset = document.querySelector(".reset-btn");
// Access the play again button
let playAgain = document.querySelector(".play-again-btn");

//Select the class move counter and change its HTML
let movesCount = document.querySelector(".moves-counter");

// Create variable for moves counter, start the count at zero
let moves = 0;
let star = document.getElementById("star-rating").querySelectorAll(".star");

let starCount = 3;
let timeCounter = document.querySelector(".timer");

let time;

let minutes = 0;

let seconds = 0;

let timeStart = false;

function shuffle(array) {
    let currentIndex = array.length,temporaryValue, randomIndex;
    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
