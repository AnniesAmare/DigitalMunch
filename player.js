class Player{
    constructor(playerID, hand, cardNumber, character, buffs, debuffs, round) {
        this.playerID = playerID;
        this.hand = hand; //objects (arrayList or linked list?)
        this.cardNumber = cardNumber; //int
        this.character = character; //object
        this.buffs = buffs;
        this.debuffs = debuffs;
        this.round = round;
    }

}


class Turn extends Player{
    constructor(playerID, hand, cardNumber, character, buffs, debuffs, round, skipTurn, endTurn, cardSum) {
        super(playerID, hand, cardNumber, character, buffs, debuffs, round);
        this.playerId = playerID;
        this.skipTurn = skipTurn; //boolean
        this.endTurn = endTurn; //boolean
        this.cardSum = cardSum; //number of cards on the players hand
        this.hand = hand; //should be an array of the cards (Id's) a player have on hand
    }

    kickDoor(){
        //use drawCard method here
        //if card is monster return a boolean with value true
        //if not monster save card, and return boolean false
    }

    lootTheRoom(){
        //use drawCard method here
        //if card is monster return a boolean with value true
        //save card if no monster, and return boolean false
    }

    drawCard(cardType, cardNumber, cardSum){
        //check the cardSum on the players hand (one may only have 5) - if move is valid
        //check which type of card (door or treasure) should be drawn
        //draw random card(s) (check how many cards the player wants to draw with cardNumber variable)
        //save card
    }

    useCard(cardID, playerID){
        //access chosen card through a ID, and get effects (buff/debuffs)
        //implement card effects
    }


    runFrom(monster){
        //method that rolls a die to figure out if a character successfully escapes a monster
        //Applies bad-stuff from monster if failed.
    };

    levelUp(playerId){
        this.level+=1
    };

    fight(monsterId, playerID){
        //method that compares a monster class level with character-level
        // and adds all possible bonuses available in combat to the calculation
    };


}

export {Player, Turn};