const cards = document.querySelectorAll('.rose-card');

let hasFlippedCard = false;
let setBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (setBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.base === secondCard.dataset.base
  
  ;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  Array.from(document.getElementsByClassName('front')).forEach(element => {
	  debugger;
	  let cardName = element.getAttribute("alt").split(" ");
	  if(firstCard.dataset.framework.indexOf(cardName[0].toLowerCase()) > 0 || secondCard.dataset.framework.indexOf(cardName[0].toLowerCase()) >= 0){
		  element.style.background = 'green'
	  }	 
	});
	CardOpen = ++CardOpen;
   resetBoard();
   if(CardOpen == 6){
		document.querySelector('.win-msg').style.display = "block";
   }
}

function matchedColor(myArray) {
    var passing = true;
    myArray.forEach(function(element) {
        if (element !== myArray[0]) {
            passing = false;
        }
    });

    return passing;
}


function unflipCards() {
  setBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
  return;
}

function resetBoard() {
  [hasFlippedCard, setBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
const closePopup = () => {
  document.querySelector('.win-msg').style.display = "none";
}
