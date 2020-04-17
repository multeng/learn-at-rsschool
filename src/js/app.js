import { Card, mainCard } from './card.js';
import mainCards from './mainCards.js';
import cards from './cards.js'

const container = document.querySelector('.main-container');
const body = document.getElementsByTagName('body')[0];


function makeLayoutMainCard(array) {
    container.innerHTML = '';
    array.forEach(card => {
        let menuCard = new mainCard(card);
        container.appendChild(menuCard.makeMainCard());
    });
}

makeLayoutMainCard(mainCards);

function makeLayoutCard(array) {
    container.innerHTML = '';
    array.forEach(card => {
        let playCard = new Card(card);
        container.appendChild(playCard.makeCardTrain());
    });
}

function handler() {
    body.addEventListener('click', event => {
        let parent = event.target.closest('div')
        let cardType = parent.getAttribute('data-name');
        if (cardType) {
            makeLayoutCard(cards[cardType]);
        }
    })
}
handler();
