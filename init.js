import { getShuffledCards } from "./cards.service.js";

export function initCards() {
    return getShuffledCards();
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