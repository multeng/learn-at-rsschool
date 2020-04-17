import { makeWrapperCardTrain, makeWrapperMainCard, makeWrapperCardPlay } from './wrapper.js';

class Card {
    constructor({ word, translation, image, audioSrc }) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.audioSrc = audioSrc;
    }

    makeCardTrain() {
        return makeWrapperCardTrain(this.image, this.word, this.translation);
    }
    makeCardPlay() {
        return makeWrapperCardPlay(this.image);
    }

}
class mainCard {
    constructor({ image, name }) {
        this.image = image;
        this.name = name;
    }

    makeMainCard() {
        return makeWrapperMainCard(this.image, this.name);
    }
}

export { Card, mainCard };