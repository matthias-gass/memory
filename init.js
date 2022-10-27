import { Card } from "./Card.js";

export function initCards() {
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

export function initStore() {
    return {
        turn: "first",
        firstCard: null,
        secondCard: null,
        reset: function() {
            this.turn = "first",
            this.firstCard = null,
            this.secondCard = null
        }
    };
}