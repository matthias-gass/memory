import {Card} from "./card.js";

var store = 
{
    turn: 'first',
    firstCard: null,
    secondCard: null,
};

var cards = initCards();

addEventListener('DOMContentLoaded', () => {
    addClickHandlerToCardElements();
});

function addClickHandlerToCardElements() {
    cards.forEach(card => {
        var element = getCardElementBy(card.position);
        element.addEventListener('click', () => cardClickHandler(card.position));
    })
}

function cardClickHandler(number) {
    var clickedCard = cards[number - 1];

    if (store.turn === 'first') {
        store.firstCard = clickedCard;
        var firstElement = getCardElementBy(store.firstCard.position);
        firstElement.src = "./images/" + store.firstCard.filename;

        store.turn = 'second';
    } else {
        store.secondCard = clickedCard;
        var firstElement = getCardElementBy(store.firstCard.position);
        var secondElement = getCardElementBy(store.secondCard.position);
        secondElement.src = "./images/" +  store.secondCard.filename;

        var isMatch = store.firstCard.character === store.secondCard.character;
        if (isMatch) {
            firstElement.onclick = null;
            secondElement.onclick = null;

            checkWinCondition();
        } else {
            setTimeout(() => {
                firstElement.src = "./images/grey.png";
                secondElement.src = "./images/grey.png";
            }, 700);
        }

        resetStore();
    }
}

function resetStore() {
    store.firstCard = null;
    store.secondCard = null;
    store.turn = 'first';
}

function checkWinCondition() {

}

function initCards() {
    var cards = [];
    cards.push(new Card("Denis the Helpless", "blue", 1));
    cards.push(new Card("Stunning Anton", "blue", 2));
    cards.push(new Card("Overwhelming Galm", "blue", 3));
    cards.push(new Card("Useful Barbara", "blue", 4));
    cards.push(new Card("Entertaining Bobby", "blue", 5));
    cards.push(new Card("Unspeakable Jolander", "blue", 6));
    cards.push(new Card("Demanding Lizzie", "blue", 7));
    cards.push(new Card("Astonishing Gerald", "blue", 8));
    cards.push(new Card("Denis the Helpless", "red", 9));
    cards.push(new Card("Stunning Anton", "red", 10));
    cards.push(new Card("Overwhelming Galm", "red", 11));
    cards.push(new Card("Useful Barbara", "red", 12));
    cards.push(new Card("Entertaining Bobby", "red", 13));
    cards.push(new Card("Unspeakable Jolander", "red", 14));
    cards.push(new Card("Demanding Lizzie", "red", 15));
    cards.push(new Card("Astonishing Gerald", "red", 16));

    return cards;
}

function getCardElementBy(number) {
    return document.querySelector("#card-" + number);
}