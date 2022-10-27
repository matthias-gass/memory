export function getCardElementBy(number) {
    return document.querySelector("#card-" + number);
}

export function getNumberByElementId(id) {
    return id.replace("card-", "");
}

export function checkWinCondition(cards) {
    return cards.every(card => card.revealed === true);
}