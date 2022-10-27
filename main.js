import {Card} from "./card.js";

///init

var store = 
{
    turn: "first",
    firstCard: null,
    secondCard: null,
};

var cards = initCards();

addEventListener("DOMContentLoaded", () => {
    addClickHandlerToCardElements();
});

function addClickHandlerToCardElements() {
    cards.forEach(card => {
        var element = getCardElementBy(card.position);
        element.addEventListener("click", cardClickHandler);
    })

    var button = document.querySelector(".button");
    button.addEventListener("click", restart)
}

function restart() {
    resetStore();

    var message = document.querySelector(".message");
    message.innerHTML = "";

    cards.forEach(card => {
        card.revealed = false;
        var element = getCardElementBy(card.position);
        element.src = "./images/grey.png";
        element.addEventListener("click", cardClickHandler);
    })

}

function cardClickHandler(event) {
    console.log("click");
    var number = getNumberByElementId(event.target.id);

    var clickedCard = cards[number - 1];

    if (store.turn === "first") {
        store.firstCard = clickedCard;
        var firstElement = event.target;
        firstElement.src = "./images/" + store.firstCard.filename;

        store.turn = "second";
    } else {
        store.secondCard = clickedCard;
        var firstElement = getCardElementBy(store.firstCard.position);
        var secondElement = event.target;
        secondElement.src = "./images/" +  store.secondCard.filename;

        var isMatch = store.firstCard.character === store.secondCard.character;
        if (isMatch) {
            store.firstCard.revealed = true;
            store.secondCard.revealed = true;

            firstElement.removeEventListener("click", cardClickHandler);
            secondElement.removeEventListener("click", cardClickHandler);

            if(checkWinCondition()) {
                var message = document.querySelector(".message");
                message.innerHTML = "Gewonnen";
            };
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
    store.turn = "first";
}

function checkWinCondition() {
    return cards.every(card => card.revealed === true);
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

function getNumberByElementId(id) {
    return id.replace("card-", "");
}