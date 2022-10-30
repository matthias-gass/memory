export class Card 
{
    constructor(character, color, filename) {
        this.character = character;
        this.color = color;
        this.filename = filename;

        this.revealed = false;
        this.position = null;
    }

    isEqual(card) {
        return this.character === card.character || this.color === card.color;
    }
}