console.log("Hello World, I am javascript");


//placeholder for functions needed to create a player
function getHand(){
    //should return a list of what cards is on hand
    var hand1 = [1,2,3,4,5,5]
    this.hand = hand1
    return this.hand
}

function getBackpack(){
    //should return a list of what cards is in the backpack
    var backpack1 = [1,3,8,4,8,5]
    this.backpack =  backpack1;
    return this.backpack
}

function getCharacters(){
    //a method for getting the a list of the characters a player currently have in play
    var characters = [2.67,4,7,34,8]
    this.characterList = characters
    return this.characterList;
}

function getCardsInUsage(){
    //method for getting what cards are currently in play
    var inUsageList = [89,4,2,6,89]
    this.cardsInUsage = inUsageList
    return this.cardsInUsage
}



//classes------------------------------------------------------------------------------------------//

class Character {
    constructor(name, gender, race,characterClass) {
        this.name = name;
        this.gender = gender;
        this.race = race;
        this.characterClass = characterClass;
        this.level = 0;
    }

    getCharacterID(){
        return this.characterID;
    }

    levelUp(){
        this.level+=1
    };

    fight(monster){
        //method that compares a monster class level with character-level
        // and adds all possible bonuses available in combat to the calculation
    };

    runFrom(monster){
        //method that rolls a die to figure out if a character successfully escapes a monster
        //Applies bad-stuff from monster if failed.
    };

}
class Treasure {
    constructor(value,levelBonus,description) {
        this.value = value;
        this.levelBonus = levelBonus;
        this.description = description;
    }
    sell(){
        //Adds a method that sells the item, and adds a level if the combined value
        // of sold items is bigger than 1000
    };
    use(){
        //Applies the item-bonus to the character
        //Checks if it is a usable-once item and if so, it removes the item effect at the end of the turn
    }

}
class Equipment extends Treasure {
    constructor(value,levelBonus,description,type,size) {
        super(value,levelBonus,description);
        this.type = type;
        this.size = size;
    }
}
class Item extends Treasure {
    constructor(value,levelBonus,description,effect,useableOnce) {
        super(value,levelBonus,description);
        this.effect = effect;
        this.useableOnce = useableOnce;

    }

}


class Dungeon{
    constructor(type, description) {
        this.type = type;
        this.description = description;
    }

    enter(){
        //a method for initializing combat i suppose?
    }


}


class Monster extends Dungeon{
    constructor(type, description, level, treasureNumber) {
        super(type, description);
        this.level = level;
        this.treasureNumber = treasureNumber;
    }


    getLevel(){
        return this.level;
    }

    getTreasureNumber(){
        return this.treasureNumber;
    }

}

class Curse extends Dungeon {
    constructor(type, description, effect, levelBonus) {
        super(type, description);
        this.effect = effect;
        this.levelBonus = levelBonus;
    }


    addEffect(effect){
        //add effect
        return effect;
    }

}



//Tests AKA the Main-----------------------------------------------------------------------------------//

//Character tests
var test = new Character("Ginny","female","elf",null);
var test2 = new Character("Conrad","male","human",null);
var characters = [
    {test},{test2},
]

console.log("Characters are: ID =",test.name," and description = ",test2.name);

//Monster tests
var test3 = new Monster("type angry", "will try to kill you", 14, 3);

console.log(test3.description)

//Treasure tests
var test4 = new Treasure(100, 1, "will up your lvl, because it just will")

console.log("This is a treasure card: worth ", test4.value, " gold and levelBonus is ", test4.levelBonus)


//Curse test
var test6 = new Curse("whatever", "will debuff you", -2, null)
console.log("its effect are = ", test6.effect, "levels")

