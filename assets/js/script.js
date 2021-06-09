document.addEventListener('DOMContentLoaded', () => {

    //card options
    let cardArray = [
        {
        name: 'white-rose',
            img: 'assets/images/white-rose.jpg',
        }, {
            name: 'white-rose',
            img: 'assets/images/white-rose.jpg',
        }, {
            name: 'black-rose',
            img: 'assets/images/black-rose.jpg',
        }, {
            name: 'black-rose',
            img: 'assets/images/black-rose.jpg',
        }, {
            name: 'green-rose',
            img: 'assets/images/green-rose.jpg',
        }, {
            name: 'green-rose',
            img: 'assets/images/green-rose.jpg',
        }, {
            name: 'pink-rose',
            img: 'assets/images/pink-rose.jpg',
        }, {
            name: 'pink-rose',
            img: 'assets/images/pink-rose.jpg',
        },

        {
            name: 'red-rose',
            img: 'assets/images/red-rose.png',
        }, {
            name: 'red-rose',
            img: 'assets/images/red-rose.png',
        }, {
            name: 'yellow-rose',
            img: 'assets/images/yellow-rose.jpg',
        }, {
            name: 'yellow-rose',
            img: 'assets/images/yellow-rose.jpg',
        }
    ]
 })

let grid = document.querySelector('grid');

 //create your board
 function createBoard() {
     for (let i=0; i < cardArray.length; i++) {
         let card = document.createElement('img')
         card.setAttribute('src', 'assets/images/blank.png')
         card.setAttribute('data-id', i)
         //card.addEventListener('click', flipcard)
         grid.appendChild(card)
     }
 }

 //check for matches


 //flip your card
 function flipcard() {
     let cardId
 }

 createBoard