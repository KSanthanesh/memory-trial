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
function startGame() {
    //Invoke shuffle function and store in varaiable
    let shuffledDeck = shuffle(deckCards);

    //iterate over deck of cards Array

    for (let i=0; i < shuffledDeck.length; i++) {
        // create the <li> tags
        let liTag = document. createElement('LI');

        //Give <li> class of card

        liTag.classList.add('card');

        //create the <img> tags
        let addImage = document.createElement('IMG');

        //Append <img> to <li>

        liTag.appendChild(addImage);

        //set the img src path with the shuffled deck
        addImage.setAttribute("src", "img/" + shuffledDeck[i]);

        // Add an alt tag to the image
        addImage.setAttribute ("alt", "image of thumbs-up");

        //Update the new <li> to the deck <ul>
        deck.appendChild(liTag);

    }
}

startGame();
function removeCard() {
    while (deck.hasChildNodes()) {
        deck.removechilds(deck.firstChild);
    }
}
function timer() {
    time = setInterval (function() {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds=0;
        }

        timeCounter.innerHTML = "<i class = 'fa fa-hourglass-start'></i>" + "Timer:" + minutes +"Mins" + seconds + "Secs";

    }, 1000);
}

function stopTime() {
    clearInterval(time);
}

function resetEverything () {
    stopTime();
    timeStart = false;
    seconds = 0;
    minutes = 0;
    timeCounter.innerHTML = "<i class = 'fa fa-hourglass-start'></i>" + "Timer: 00:00";

    //Reset star count and add the class back to show starts again
     star[1].firstElementchild.classlist.add("fa-star");
     star[2].firstElementchild.classlist.add("fa-star");
     starCount = 3;

     //Reset moves count abd reset its innerHTML
     moves = 0;
     movesCount.innerHTML = 0;

     //Clear both arrays that hold the opened and matched cards
     matched = [];
     opened = [];

     //clear the deck
     removeCard();

     //Create a new deck
     startGame();

}
function movescounter() {
    movesCount.innerHtml ++;
    moves++;
}
function starRating() {
    if (moves ===10) {
        star[2].firstElementChild.classList.remove("fa-star");
        starCount --;
    }
    if (moves ===14) {
        star[1].firstElementChild.classList.remove("fa-star");
        starCount --; 
    }
}
/* compare two cards to see if they match or not */
function compareTwo() {
    // when there are 2 cards in the opened Array
    if (opened.length === 2) {
        document.body.style.pointerEvents = "none";
    }
    if (opened.length === 2 && opened[0].src === opened[1].src) {
        match();
    } else if (opened.length === 2 && opened[0].src != opened[1].src) {
        nomatch();
}
}