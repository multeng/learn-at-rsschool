import { makeWrapperCard, makeWrapperMainCard } from './wrapper.js';
import cards from './cards.js'

var test = {
    word: 'fish',
    translation: 'ловить рыбу',
    image: './src/img/fish.jpg',
    audioSrc: './src/audio/fish.mp3'
};

export default class Card {
    constructor({ word, translation, image, audioSrc }) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.audioSrc = audioSrc;
    }
    makeCard() {
        return makeWrapperCard(this.image, this.word, this.translation);
    }
    makeNoize() {
        const audio = new Audio(this.audioSrc);
        audio.play;
    }
}


document.body.appendChild(card.makeCard());