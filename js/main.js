/*Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.  
//Mix Logic from Tic Tac Toe and Slot Machine
//Randomize the values of each Card on load
//User Clicks alternate like tic tac (turn 1 and turn 2)
//Does turn 1 == Turn 2
//If yes stay flipped over
//If no flip back
//
-LESSONS: learning how to have truly random events and not hard coding everything.
-*/
let cards = ['A', 'B', 'C', 'D', 'E']
// let random = Math.floor(Math.random() * cards.length)
let container =  document.querySelector("#container")
let arr = []

class Cards{
//these values are something that the card has for its life
    flipped = false;
    display = true;
    constructor(cardVal, storage){
        this.value = cardVal;
        this.element = storage;

    }
//these functions are verbs because they effect the BEHAVIOR  of the cards
    flip(){
        this.flipped = !this.flipped
    }
    hide(){
        this.display = false
    }
}

class Board{
    match = false
    cardsFlipped = []
    constructor(){
        for(let i = 0; i<cards.length; i++){

            for(let b = 0; b <2; b++){
            let newCard = document.createElement('div')
                container.appendChild(newCard)
            let card = new Cards(cards[i],newCard)
            arr.push(card) //pushing the cards to the empty array cardsFlipped
            
            newCard.innerText = 'CARDFlipped'


            newCard.addEventListener('click', ()=>{
                if(this.cardsFlipped.length <2){
                newCard.innerText = card.value
                card.flip()
                this.cardsFlipped.push(card)
                }
                console.log(this.cardsFlipped.length)
                if(this.cardsFlipped[0]?.value==this.cardsFlipped[1]?.value){
                   this.match = true
                   alert('This is a Match')
                //    display flippecCard or whatevs
                }if(this.cardsFlipped.length ==2){
                    for(card of this.cardsFlipped){
                        card.element.innerText = 'CARDFlipped' 
                    }
                    this.cardsFlipped = []

                }
            })

            }




        }
    }
    checkMatch(card1, card2){
        if(card1 == card2){
            match = true;
        }
    }
}

document.querySelector('button').addEventListener('click', run)
function run(){

    let gameBoard = new Board()
}






































// let cards = ['A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E'];

// while( cards.length > 0){

// let random = Math.floor(Math.random() * cards.length);
// // let randomCard = cards[random]
// console.log(random)
// const div = document.createElement('div')
// document.querySelector("#container").appendChild(div)

// div.classList.add('row',cards[random])
// // document.querySelectorAll('.row:not([card])')[random].classList.add(cards[0])
// cards.splice(random,1)

// }

// document.querySelector("#container").addEventListener('click', pickCard)
// let cardOne = undefined

// function pickCard(event){
//     event.target.classList.add('flipped')
//     if(cardOne == undefined){
//         cardOne = event.target
//         return
//     }
//     if(cardOne.className == event.target.className){

//         console.log('They Match')
//     }else{
    
//         event.target.classList.remove('flipped')
//         cardOne.classList.remove('flipped')
//     }

// console.log(event.target)
// }

// need to get CSS to reveal
