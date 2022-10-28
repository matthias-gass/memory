export class Card 
{
    constructor(character, color, position) {
        this.character = character;
        this.color = color;
        this.position = position;
        this.revealed = false;

        this.filename = "yoda.jpg";
    }

    isEqual(card) {
        return this.character === card.character;
    }
}