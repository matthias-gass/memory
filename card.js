export class Card 
{
    constructor(character, color) {
        this.character = character;
        this.color = color;

        this.revealed = false;
        this.position = null;
        this.filename = "yoda.jpg";
    }

    isEqual(card) {
        return this.character === card.character;
    }
}