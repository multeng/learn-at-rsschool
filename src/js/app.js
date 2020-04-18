import { Card, mainCard } from './card.js';
import { makeWrapperCardTrain, makeWrapperMainCard, makeWrapperCardPlay, makeButton } from './wrapper.js';
import mainCards from './mainCards.js';
import cards from './cards.js'

const container = document.querySelector('.main-container');
const body = document.getElementsByTagName('body')[0];
const audio = document.querySelector('.audio');
const menu = document.querySelector('.menu');
let train = true;
let cardsArray = [];


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
    cardsArray = [];
    array.forEach(card => {
        let playCard = new Card(card);
        cardsArray.push(playCard);
        if (train) {
            container.appendChild(playCard.makeCardTrain());
        }
        if (!train) {
            container.appendChild(playCard.makeCardPlay());
        }

    });
}

function changeMode() {
    const menuCard = document.querySelectorAll('.main-card__link');
    const cardImage = document.querySelectorAll('.card-img');
    const cardName = document.querySelectorAll('.card-name');
    const rotate = document.querySelectorAll('.rotate');
    const menu = document.querySelector('.menu')
    if (menuCard) {
        menu.classList.toggle('menu-red');
        menuCard.forEach(element => {
            element.classList.toggle('main-card__link-red');
        })
        cardImage.forEach(element => {
            element.classList.toggle('card-img__full');
        })
        cardName.forEach(element => {
            element.classList.toggle('card-name-off');
        })
        rotate.forEach(element => {
            element.classList.toggle('rotate-img');
        })
    }
}


function handler() {
    body.addEventListener('click', event => {
        let element = event.target;
        let parent = element.closest('div');
        let grandpa = element.closest('.card');
        let dataType = element.getAttribute('data-type');
        let dataTypeCard = parent.getAttribute('data-name');
        if (dataTypeCard) {
            makeLayoutCard(cards[dataTypeCard]);
        }
        if (dataType === 'switcher') {
            changeMode();
            train ? train = false : train = true;
        }
        if (parent.getAttribute('data-type') && train) {
            audio.src = cardsArray[grandpa.id - 1].getAudio();
            console.log(cardsArray[grandpa.id - 1].getAudio());
        }
        if (element.classList.contains('hamburger')) {
            element.classList.toggle('hamburger-active');
            element.children[0].classList.toggle('hamburger__line-active');
            menu.classList.toggle('menu-active');
        }
        if (element.classList.contains('menu-item')) {
            if (element.innerText === 'Main Page') {
                if (!train) {
                    makeLayoutMainCard(mainCards);
                    changeMode();
                    menu.classList.toggle('menu-red');
                } else {
                    makeLayoutMainCard(mainCards);
                }
            } else {
                makeLayoutCard(cards[element.innerText]);
            }
        }
    })
}
handler();
