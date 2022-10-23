class Card 
{
    constructor(character, color, position) {
        this.character = character;
        this.color = color;
        this.position = position;

        this.filename = "yoda.jpg";
    }
}

firstCard = null;
secondCard = null;
cards = [];
initCards();

function cardClickHandler(number) {
    var element = getCardElementBy(number);
    var clickedCard = cards[number - 1];

    if (firstCard === null) {
        firstCard = clickedCard;
        element.src = "./images/" + firstCard.filename;
    } else {
        secondCard = clickedCard;
        firstElement = getCardElementBy(firstCard.position); 
        secondElement = getCardElementBy(secondCard.position);
        secondElement.src = "./images/" +  secondCard.filename;

        isMatch = firstCard.character === secondCard.character;
        if (isMatch) {
            firstElement.onclick = null;
            secondElement.onclick = null;
        } else {
            setTimeout(() => {
                firstElement.src = "./images/grey.png";
                secondElement.src = "./images/grey.png";
            }, 1000);
        }

        firstCard = null;
        secondCard = null;
    }
}

function initCards() {
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
}

function getCardElementBy(number) {
    return document.querySelector("#card-" + number);
}