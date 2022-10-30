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
    new Card("c3po", "B", "./characters/c3poB.png"),
    new Card("c3po", "G", "./characters/c3poG.png"),
    new Card("c3po", "K", "./characters/c3poK.png"),
    new Card("c3po", "N", "./characters/c3poN.png"),
    new Card("c3po", "O", "./characters/c3poO.png"),
    new Card("c3po", "P", "./characters/c3poP.png"),
    new Card("jawa", "B", "./characters/jawaB.png"),
    new Card("jawa", "G", "./characters/jawaG.png"),
    new Card("jawa", "K", "./characters/jawaK.png"),
    new Card("jawa", "N", "./characters/jawaN.png"),
    new Card("jawa", "O", "./characters/jawaO.png"),
    new Card("jawa", "P", "./characters/jawaP.png"),
    new Card("r2d2", "B", "./characters/r2d2B.png"),
    new Card("r2d2", "G", "./characters/r2d2G.png"),
    new Card("r2d2", "K", "./characters/r2d2K.png"),
    new Card("r2d2", "N", "./characters/r2d2N.png"),
    new Card("r2d2", "O", "./characters/r2d2O.png"),
    new Card("r2d2", "P", "./characters/r2d2P.png"),
    new Card("sith", "B", "./characters/sithB.png"),
    new Card("sith", "G", "./characters/sithG.png"),
    new Card("sith", "K", "./characters/sithK.png"),
    new Card("sith", "N", "./characters/sithN.png"),
    new Card("sith", "O", "./characters/sithO.png"),
    new Card("sith", "P", "./characters/sithP.png"),
    new Card("storm", "B", "./characters/stormB.png"),
    new Card("storm", "G", "./characters/stormG.png"),
    new Card("storm", "K", "./characters/stormK.png"),
    new Card("storm", "N", "./characters/stormN.png"),
    new Card("storm", "O", "./characters/stormO.png"),
    new Card("storm", "P", "./characters/stormP.png"),
    new Card("yoda", "B", "./characters/yodaB.png"),
    new Card("yoda", "G", "./characters/yodaG.png"),
    new Card("yoda", "K", "./characters/yodaK.png"),
    new Card("yoda", "N", "./characters/yodaN.png"),
    new Card("yoda", "O", "./characters/yodaO.png"),
    new Card("yoda", "P", "./characters/yodaP.png"),
]