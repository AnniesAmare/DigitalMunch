console.log("Hello World, I am javascript");

//import phaser library
import Phaser from 'phaser'

/*create a new scene
(this is where everything in the game goes)
-- one game can have many scenes like multiple levels, or multiple screens)
-- scenes can be open at the same time */
let gameScene1 = new Phaser.Scene('Game');

/*Load assets
- loads external files to memory before the game starts */
gameScene1.preload = function(){
    //Example of loading images (like ex. a background):
    this.load.image('background', './assets/MunchkinGameboard.png'); //note: "this" refers to scene object

};

//the actual game in the gameScene
gameScene1.create = function(){
    //Getting the width and height of the game from configurations
    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height
    /*("this" refers to the gameScene.
    "sys" means that the command we are after, is from system commands.
    "game" means its a game object we want something from.
    "config" is the game object we want something from.)
    */

    //Creating a "sprite" (which is game characters, and elements)
    let bg = this.add.sprite(0,0, 'background');
    //--changing a sprite's position
    bg.setPosition(gameW/2, gameH/2);

    //fit background to gameScene
    bg.displayWidth = gameW;
    bg.displayHeight = gameH;



};

//updates the gameScene
gameScene1.update = function(){
};


//sets the configuration of the game
const config = {
    type: Phaser.AUTO, //Phaser will use WebGL if available
    width: 800,
    height: 600,
    scene: gameScene1
}

//create a new game, and pass the configuration
const game = new Phaser.Game(config)




//Classes------------------------------------------------------------------------------------------//

class Character {
    constructor(name, gender, race,characterClass) {
        this.name = name;
        this.gender = gender;
        this.race = race;
        this.characterClass = characterClass;
        this.level = 0;
    }

    levelUp(){
        this.level+=1
    };

    isCursed(){
        //Check for cursed states, and update accordingly
    }

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
    constructor(value,levelBonus,description,effect,usableOnce) {
        super(value,levelBonus,description);
        this.effect = effect;
        this.useableOnce = usableOnce;

    }

}


class Door{
    constructor(type, description) {
        this.type = type;
        this.description = description;
    }

    use(){
        //initiates door-card
        //Checks if card is a monster card, this method should return a value that signifies that combat is entered
    }


}


class Monster extends Door{
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

class Curse extends Door {
    constructor(type, description, effect) {
        super(type, description);
        this.effect = effect;
    }


    addCurse(){
        //Applies curse effect to character, monster, treasure or item
    }

    removeCurse(){
        //removes curse effect from character, monster, treasure or item
    }



}



//Tests AKA the Main-----------------------------------------------------------------------------------//

//Character tests
var test = new Character("Ginny","female","elf",null);
var test2 = new Character("Conrad","male","human",null);
var characters = [
    {test},{test2},
]

console.log("Characters are: ID =",test.name," and ID = ",test2.name);

//Treasure tests
var test3 = new Item(300, 1, "For a small sacrifice you gain strength from this magic lamp!",
    "If you sacrifice a 100 gold you add a lvlBonus to your short sword (If you have one)", false)
console.log()

var test4 = new Equipment(200, 4, "This is a short sword made by Merlin himself. " +
    "You may only wield it if you are a Super Munchkin",
    "Short Sword", "small - meaning that it isn't a big item")

console.log("The description of this item is: ", test3.description, "\nThe effect of this item is: ", test3.effect)
console.log("The description of this piece of equipment is: ", test4.description, "\nThe item is worth:  ",
    test4.value, " gold.\n ...andddd the equipment type is: ", test4.type)

//Door tests
var test5 = new Monster("Demon", "This is Lucifer. Boo-hoo you're screwed", 21, 4)
var test6 = new Curse("Permanent till removed", "If someone played this then they want to make your" +
    "life miserable game-wise", "The dreaded situation of AT interfering during your round. Monster lvl +14")
var DoorCards = [{test5},{test6}]

console.log("Monster type: ", test5.type, "\nDescription: ", test5.description, "lvl: ", test5.level)
console.log("Curse type: ", test6.type, "\nEffect: ", test6.effect)
console.log("Datatype: ", typeof DoorCards, ".\nObject type: ", DoorCards)


