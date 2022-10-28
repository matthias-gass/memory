import { initStore, initCards } from "./init.js";
import { getCardElementBy, getNumberByElementId, checkWinCondition } from "./helper.js";

///init
var store = initStore();
var cards = initCards();
var modal = document.querySelector(".modal");

addEventListener("DOMContentLoaded", () => {
    addClickHandlerToCardElements();

    var button = document.querySelector(".button");
    button.addEventListener("click", restart)
});

function addClickHandlerToCardElements() {
    cards.forEach(card => {
        var element = getCardElementBy(card.position);
        element.addEventListener("click", cardClickHandler);
    })
}

function restart() {
    hideModal();

    store.reset();

    cards.forEach(card => {
        card.revealed = false;
        var element = getCardElementBy(card.position);
        element.src = "./images/grey.png";
        element.addEventListener("click", cardClickHandler);
    })
}

function cardClickHandler(event) {
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

            if(checkWinCondition(cards)) {
                showModal();
            };
        } else {
            setTimeout(() => {
                firstElement.src = "./images/grey.png";
                secondElement.src = "./images/grey.png";
            }, 700);
        }

        store.reset();
    }
}

function showModal() {
    if(modal.classList.contains("modal-visible") === false) modal.classList.add("modal-visible");
}

function hideModal() {
    modal.classList.remove("modal-visible");
}