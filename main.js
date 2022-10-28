import { initStore, initCards } from "./init.js";
import { getCardElementBy, getNumberByElementId, checkWinCondition } from "./helper.js";

///init
var store = initStore();
var cards = initCards();
var elements = [];
var modal = document.querySelector(".modal");
var cardBackImgSrc = "./images/grey-pattern.jpg";

addEventListener("DOMContentLoaded", () => {
    cards.forEach(card => {
        var element = getCardElementBy(card.position);
        element.addEventListener("click", cardClickHandler);
        elements.push(element);
    })

    var button = document.querySelector(".button");
    button.addEventListener("click", restart)
});

function restart() {
    hideModal();

    store.reset();

    cards.forEach(card => {
        card.revealed = false;
        //var element = elements[card.position - 1]; //Je nachdem, auf was du den Fokus legen willst: Das Arbeiten mit Arrays oder mit DOMElementen
        var element = getCardElementBy(card.position);
        element.src = cardBackImgSrc;
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
        if(store.firstCard.position === clickedCard.position) return;
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
                firstElement.src = cardBackImgSrc;
                secondElement.src = cardBackImgSrc;
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