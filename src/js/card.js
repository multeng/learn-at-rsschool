import { makeWrapperCardTrain, makeWrapperMainCard, makeWrapperCardPlay, makeButton } from './wrapper.js';

class Card {
    constructor({ id, word, translation, image, audioSrc }) {
        this.id = id;
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.audioSrc = audioSrc;
    }

    makeCardTrain() {
        return makeWrapperCardTrain(this.id, this.image, this.word, this.translation);
    }
    makeCardPlay() {
        return makeWrapperCardPlay(this.id, this.image, this.word, this.translation);
    }
    getAudio() {
        return this.audioSrc;
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