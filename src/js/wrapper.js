
function makeWrapperMainCard(image, cardName) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('main-card');
    wrapper.setAttribute('data-name', cardName);
    wrapper.innerHTML += `<a href="#/cards" class="main-card__link"> <img src="${image}" class="main-card__image" alt="${cardName}"> ${cardName}</a>`;
    return wrapper;
}

function makeWrapperCardTrain(image, cardName, tranlateName) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('card');
    wrapper.setAttribute('data-type', 'TrainCard')
    wrapper.innerHTML += `
        <div class="front">
            <img class="card-img" src="${image}" alt="${cardName}">
            <p class="card-name">${cardName}</p>
        </div>
        <div class="back">
            <img class="card-img" src="${image}" alt="${tranlateName}">
            <p class="card-name">${tranlateName}</p>
        </div>
        <div class="rotate"></div>
    `;
    return wrapper;
}
function makeWrapperCardPlay(image) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('card');
    wrapper.setAttribute('data-type', 'PlayCard')
    wrapper.innerHTML += `
        <div class="front">
            <img class="card-img" src="${image}" alt="">
        </div>
    `;
    return wrapper;
}

export { makeWrapperMainCard, makeWrapperCardTrain, makeWrapperCardPlay };
