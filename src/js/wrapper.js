
function makeWrapperMainCard(image, cardName) {
    let wrapper = document.createElement('div');
    wrapper.innerHTML += `<a href="#/cards" class="main-card"> <img src="${image}" class="main-card__image" alt="${cardName}"> ${cardName}</a>`;
    return wrapper;
}

function makeWrapperCard(image, cardName, tranlateName) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('card');
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

export {makeWrapperMainCard, makeWrapperCard};
