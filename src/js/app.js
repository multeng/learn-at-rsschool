import { Card, mainCard } from './card.js';
import { makeCardContainer, makeMainContainer, makeButton, makeWinWrapper, makeLoseWrapper, makeStar } from './wrapper.js';
import mainCards from './mainCards.js';
import cards from './cards.js'

const menu = document.querySelector('.menu');
const audio = document.querySelector('.audio');
const audioservice = document.querySelector('.audio-service')
const starWin = './src/img/star-win.svg'
const starLose = './src/img/star.svg'

let cardsDataSet = [];
let playCardsDataSet = [];
let randomCard = null;
let train = true;
let errors = 0;
// рисуем контейнер для главных карточек
makeMainContainer();

// функция которая меняет режим
function changeMode() {
    const mainCards = document.querySelectorAll('.main-card__link');
    const cardImages = document.querySelectorAll('.card-img');
    const cardNames = document.querySelectorAll('.card-name');
    const rotateImages = document.querySelectorAll('.rotate');
    const buttonContainer = document.querySelector('.button-container');
    menu.classList.toggle('menu-red');
    if (mainCards) {
        mainCards.forEach(card => {
            card.classList.toggle('main-card__link-red');
        });
    }
    if (cardImages) {
        cardImages.forEach(cardImage => {
            cardImage.classList.toggle('card-img__full');
        });
    }
    if (cardNames) {
        cardNames.forEach(cardName => {
            cardName.classList.toggle('card-name-off');
        })
    }
    if (rotateImages) {
        rotateImages.forEach(rotateImage => {
            rotateImage.classList.toggle('rotate-img-off');
        })
    }
    if (buttonContainer) {
        buttonContainer.classList.toggle('hide');
    }
}

function changeMenuAndBurger() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const hamburger__line = document.querySelector('.hamburger__line');
    menu.classList.toggle('menu-active');
    hamburger.classList.toggle('hamburger-active');
    hamburger__line.classList.toggle('hamburger__line-active');
}


// функция которая добавляет в главный контейнер главные карточки
function makeLayoutMainCard(mainCards) {
    const container = document.querySelector('.main-container');
    mainCards.forEach(card => {
        let menuCard = new mainCard(card);
        if (train) {
            container.appendChild(menuCard.makeMainGreenCard());
        } else {
            container.appendChild(menuCard.makeMainRedCard());
        }
    });
}
// добавляем в главный контейнер карточки
makeLayoutMainCard(mainCards);

//функция которая создает игровые карточки и кнопку;
function makeLayoutCard(cards) {
    cardsDataSet = [];
    playCardsDataSet = [];
    const container = document.querySelector('.container');
    cards.forEach(card => {
        let instanseOfCard = new Card(card);
        cardsDataSet.push(instanseOfCard);
        playCardsDataSet.push(instanseOfCard);
        if (train) {
            container.appendChild(instanseOfCard.makeCardTrain());
        } else {
            container.appendChild(instanseOfCard.makeCardPlay());
        }
    })
    makeButton(train);
}

// функции для перемешивания массива игровых карточек
function makeRandomArr(a, b) {
    return Math.random() - 0.5;
}
// функция повторяет звук рандомной карточки
function makeRepeat() {
    audio.src = randomCard.getAudio();
}
// функция запуска игры и продолжения игры
function game() {
    if (playCardsDataSet.length === 0 && errors !== 0) {
        makeLoseWrapper(errors);
    } else if (playCardsDataSet.length === 0 && errors === 0) {
        makeWinWrapper();
    } else {
        playCardsDataSet.sort(makeRandomArr)
        randomCard = playCardsDataSet.pop();
        audio.src = randomCard.getAudio();
    }
}



//обработчики кликов в хэдере, контейнерах и меню
// обрабатываем клики в хэдере
function headerHandler() {

    document.querySelector('.container-header').addEventListener('click', event => {
        const element = event.target;
        //обрабатываем клики по гамбургеру
        if (element.classList.contains('hamburger')) {
            element.classList.toggle('hamburger-active');
            element.children[0].classList.toggle('hamburger__line-active');
            menu.classList.toggle('menu-active');
        }
        //обрабатываем клики по свитчеру
        if (element.classList.contains('onoffswitch-checkbox')) {
            changeMode();
            train ? train = false : train = true;
        }
    })

}

//обрабатываем клики в контейнере с главными карточками
function mainContainerHandler() {
    document.querySelector('.container').addEventListener('click', event => {
        const element = event.target;
        const mainCard = element.closest('.main-card');
        if (mainCard) {
            const dataName = mainCard.getAttribute('data-name');
            makeCardContainer();
            makeLayoutCard(cards[dataName]);
            containerHandler();
        }
    })
}

//обрабатываем клики в контейнере с игровыми карточками
function containerHandler() {
    document.querySelector('.card-container').addEventListener('click', event => {
        const element = event.target;
        const cardContainer = element.closest('.card')
        const startGameButton = document.querySelector('.button')
        const repeatButton = document.querySelector('.repeat');
        //переворачиаваем карточку
        if (element.classList.contains('rotate')) {
            cardContainer.classList.add('translate');
        }
        //делаем звук при нажатии на карточку
        if (train && cardContainer && !element.classList.contains('rotate')) {
            if (cardContainer.getAttribute('data-type') === 'TrainCard') {
                const card = cardsDataSet.find(card => card.getId() === +cardContainer.id)
                audio.src = card.getAudio();
            }
        }
        //запускаем игра при нажатии на старт гейм
        if (element.classList.contains('button')) {
            game();
            startGameButton.classList.add('hide');
            repeatButton.classList.remove('hide');
        }
        //обработка карточек во время игры
        if (!train && cardContainer) {
            if (+cardContainer.id === randomCard.getId()) {
                cardContainer.classList.add('target');
                setTimeout(game, 1000);
                audioservice.src = './src/audio/correct.mp3';
                makeStar(starWin);
            } else if (+cardContainer.id !== randomCard.getId() && !cardContainer.classList.contains('target')) {
                audioservice.src = './src/audio/error.mp3';
                errors++;
                makeStar(starLose);
            }
        }
        //кнопка повторения звука
        if (element.classList.contains('repeat')) {
            makeRepeat();
        }
    })
    //переворачиваем карточку когда убираем мышку с элемента
    document.querySelector('.card-container').addEventListener('mouseover', event => {
        if (event.target.classList.contains('container')) {
            event.relatedTarget.closest('.card').classList.remove('translate');
        }
    })
}

//обрабатываем события в меню
function menuHandler() {
    document.querySelector('.menu').addEventListener('click', event => {
        const element = event.target;
        if (element.innerText === "Main Page") {
            makeMainContainer();
            makeLayoutMainCard(mainCards);
            mainContainerHandler();
            changeMenuAndBurger();
        } else if (element.classList.contains('menu-item')) {
            makeCardContainer();
            makeLayoutCard(cards[element.innerText]);
            containerHandler();
            changeMenuAndBurger();
        }
    })
}


headerHandler();
mainContainerHandler();
menuHandler();
