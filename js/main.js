/*Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.  
//Mix Logic from Tic Tac Toe and Slot Machine
//Randomize the values of each Card on load
//User Clicks alternate like tic tac (turn 1 and turn 2)
//Does turn 1 == Turn 2
//If yes stay flipped over
//If no flip back
//
-
-*/



let cards = ['A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E'];

while( cards.length > 0){

let random = Math.floor(Math.random() * cards.length);
// let randomCard = cards[random]
console.log(random)
const div = document.createElement('div')
document.querySelector("#container").appendChild(div)

div.classList.add('row',cards[random])
// document.querySelectorAll('.row:not([card])')[random].classList.add(cards[0])
cards.splice(random,1)

}

document.querySelector("#container").addEventListener('click', pickCard)
let cardOne = undefined

function pickCard(event){
    event.target.classList.add('flipped')
    if(cardOne == undefined){
        cardOne = event.target
        return
    }
    if(cardOne.className == event.target.className){

        console.log('They Match')
    }else{
    
        event.target.classList.remove('flipped')
        cardOne.classList.remove('flipped')
    }

console.log(event.target)
}

// need to get CSS to reveal
