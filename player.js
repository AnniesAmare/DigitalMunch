class Player{
    constructor(playerID, hand, cardNumber, character, buffs, debuffs) {
        this.playerID = playerID;
        this.hand = hand; //objects (arrayList or linked list?)
        this.cardNumber = cardNumber; //int
        this.character = character; //object
        this.buffs = buffs;
        this.debuffs = debuffs;
    }


}

export {Player};