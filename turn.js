class Turn{
    constructor(playerID, round, skipTurn, endTurn, cardSum, hand) {
        this.playerId = playerID;
        this.skipTurn = skipTurn; //boolean
        this.endTurn = endTurn; //boolean
        this.cardSum = cardSum; //number of cards on the players hand
        this.hand = hand; //should be an array of the cards (Id's) a player have on hand
    }

    combat(){
        //allow player to choose actions
        //allow other players to interfere (use cards)
    }

    action(){
        //method should be a if-statement that implements different actions (like kickDoor), based on
        //a players choices (input)
    }

    kickDoor(){
        //use drawCard method here
        //implement combat if card is monster
    }

    lootTheRoom(){
        //use drawCard method here
        //implement combat if card is monster
        //save card if no monster
    }

    drawCard(cardType, cardNumber, cardSum){
        //check the cardSum on the players hand (one may only have 5) - if move is valid
        //check which type of card (door or treasure) should be drawn
        //draw random card(s) (check how many cards the player wants to draw with cardNumber variable)
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
