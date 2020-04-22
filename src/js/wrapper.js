// функция делает контейнер с главыми карточками

function makeMainContainer() {
    const appContainer = document.querySelector('.app-container');
    const cardContainer = document.querySelector('.container');
    const mainCardContainer = document.createElement('div');
    mainCardContainer.classList.add('container', 'main-container');
    if (cardContainer) {
        cardContainer.remove();
    }
    appContainer.appendChild(mainCardContainer);
}
// функция делает контенер с игровыми карточками
function makeCardContainer() {
    const appContainer = document.querySelector('.app-container');
    const mainCardContainer = document.querySelector('.container');
    const CardContainer = document.createElement('div');
    const ratigcheck = document.querySelector('.rating');
    CardContainer.classList.add('container', 'card-container');
    if (mainCardContainer) {
        mainCardContainer.remove();
    }
    if (ratigcheck) {
        ratigcheck.remove();
    }
    const ratig = document.createElement('div');
    ratig.classList.add('rating');
    CardContainer.classList.add('container', 'card-container');
    appContainer.appendChild(ratig);
    appContainer.appendChild(CardContainer);
}
// функция рисует карточку в главном меню если режим игры выключен
function makeWrapperMainGreenCard(image, cardName) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('main-card');
    wrapper.setAttribute('data-name', cardName);
    wrapper.innerHTML += `<a href="#/cards" class="main-card__link"> <img src="${image}" class="main-card__image" alt="${cardName}"> ${cardName}</a>`;
    return wrapper;
}
//функция рисует карточку в главном меню если режим игры включен
function makeWrapperMainRedCard(image, cardName) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('main-card');
    wrapper.setAttribute('data-name', cardName);
    wrapper.innerHTML += `<a href="#/cards" class="main-card__link main-card__link-red"> <img src="${image}" class="main-card__image" alt="${cardName}"> ${cardName}</a>`;
    return wrapper;
}
//функция рисует игровую карточку если режим игры выключен
function makeWrapperCardTrain(id, image, cardName, tranlateName) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('card');
    wrapper.setAttribute('data-type', 'TrainCard')
    wrapper.id = id;
    wrapper.innerHTML += `
        <div class="front" data-type="TrainCard">
            <img class="card-img" src="${image}" alt="${cardName}">
            <p class="card-name">${cardName}</p>
        </div>
        <div class="back" data-type="TrainCard">
            <img class="card-img" src="${image}" alt="${tranlateName}">
            <p class="card-name">${tranlateName}</p>
        </div>
        <div class="rotate rotate-img"></div>
    `;
    return wrapper;
}
//функция рисует игровую карточку если режим игры включен
function makeWrapperCardPlay(id, image, cardName, tranlateName) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('card');
    wrapper.setAttribute('data-type', 'TrainCard')
    wrapper.id = id;
    wrapper.innerHTML += `
        <div class="front" data-type="TrainCard">
            <img class="card-img card-img__full" src="${image}" alt="${cardName}">
            <p class="card-name card-name-off">${cardName}</p>
        </div>
        <div class="back" data-type="TrainCard">
            <img class="card-img card-img__full" src="${image}" alt="${tranlateName}">
            <p class="card-name card-name-off">${tranlateName}</p>
        </div>
        <div class="rotate"></div>
    `;
    return wrapper;
}
//функция рисует кнопку когда мы переходим к карточкам
function makeButton(trainmode) {
    const container = document.querySelector('.container');
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    if (trainmode) {
        buttonContainer.classList.add('hide');
    }
    const buttonStart = document.createElement('input');
    buttonStart.classList.add('button');
    buttonStart.type = 'button';
    buttonStart.value = 'Start Game';
    const buttonRepeat = document.createElement('img');
    buttonRepeat.classList.add('repeat');
    buttonRepeat.classList.add('hide');
    buttonRepeat.src = './src/img/repeatgold.png';
    buttonContainer.appendChild(buttonStart);
    buttonContainer.appendChild(buttonRepeat);
    container.appendChild(buttonContainer);
}
// функция рисует страницу если мы не ошибались
function makeWinWrapper() {
    const appContainer = document.querySelector('.app-container');
    appContainer.innerHTML = '';
    let wrapper = document.createElement('div');
    wrapper.classList.add('result-page');
    wrapper.innerHTML += `
    <img class="result-page__img" src="./src/img/success.jpg" alt="success">
    <audio class="audio" autoplay="autoplay" src="./src/audio/success.mp3"></audio>
    `;
    appContainer.appendChild(wrapper);
}
// функция рисует страницу если мы ошиблись хоть раз
function makeLoseWrapper(countErrors) {
    const appContainer = document.querySelector('.app-container');
    appContainer.innerHTML = '';
    let wrapper = document.createElement('div');
    wrapper.classList.add('result-page');
    wrapper.innerHTML += `
    <p class="error"> ${countErrors} Errors </p>
    <img class="result-page__img" src="./src/img/failure.jpg" alt="success">
    <audio class="audio" autoplay="autoplay" src="./src/audio/failure.mp3"></audio>
    `;
    appContainer.appendChild(wrapper);
}
// функция рисует звезду 
function makeStar(source) {
    const ratig = document.querySelector('.rating');
    const starConrainer = document.createElement('div');
    const star = document.createElement('img');
    star.src = source;
    starConrainer.appendChild(star);
    ratig.prepend(starConrainer);
}
export { makeWrapperMainGreenCard, makeWrapperMainRedCard, makeCardContainer, makeMainContainer, makeWrapperCardTrain, makeWrapperCardPlay, makeButton, makeWinWrapper, makeLoseWrapper, makeStar };
