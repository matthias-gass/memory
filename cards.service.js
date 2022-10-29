import { Card } from './Card.js';

export function getShuffledCards() {
    var randomCards = getCopyOfCards();

    var i = randomCards.length - 1;

    while(i >= 0) {
        var j = Math.floor(Math.random() * i + 1);
        var card = randomCards[i];
        randomCards[i] = randomCards[j];
        randomCards[j] = card;

        randomCards[i].position = i + 1;
        randomCards[j].position = j + 1;

        i--;
    }

    return randomCards;
}

function getCopyOfCards() {
    var cardsCopy = [];

    for (var i = 0; i < cards.length; i++) {
        cardsCopy[i] = cards[i];
    };

    return cardsCopy;
}

const cards = [
    new Card("Denis the Helpless", "blue"),
    new Card("Stunning Anton", "blue"),
    new Card("Overwhelming Galm", "blue"),
    new Card("Useful Barbara", "blue"),
    new Card("Entertaining Bobby", "blue"),
    new Card("Unspeakable Jolander", "blue"),
    new Card("Demanding Lizzie", "blue"),
    new Card("Astonishing Gerald", "blue"),
    new Card("Denis the Helpless", "red"),
    new Card("Stunning Anton", "red"),
    new Card("Overwhelming Galm", "red"),
    new Card("Useful Barbara", "red"),
    new Card("Entertaining Bobby", "red"),
    new Card("Unspeakable Jolander", "red"),
    new Card("Demanding Lizzie", "red"),
    new Card("Astonishing Gerald", "red")
]