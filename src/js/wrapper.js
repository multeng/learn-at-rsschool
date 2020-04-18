
function makeWrapperMainCard(image, cardName) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('main-card');
    wrapper.setAttribute('data-name', cardName);
    wrapper.innerHTML += `<a href="#/cards" class="main-card__link"> <img src="${image}" class="main-card__image" alt="${cardName}"> ${cardName}</a>`;
    return wrapper;
}

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
function makeButton() {
    const appContainer = document.querySelector('.app-container');
    const container = document.createElement('div');
    const button = document.createElement('button');
    container.classList.add('button-container');
    button.classList.add('button');
    container.appendChild(button);
    appContainer.appendChild(container);

}
export { makeWrapperMainCard, makeWrapperCardTrain, makeWrapperCardPlay, makeButton };
