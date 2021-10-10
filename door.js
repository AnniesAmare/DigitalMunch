class Door {
    constructor(type, description) {
        this.type = type;
        this.description = description;
    }

}

class Curses extends Door{
    constructor(type, description, usages) {
        super(type, description);
        this.usages = usages;
    }

    addCurse(usages){
        //a method that adds a curse-state to a item/character/card that's decided by the player
        //has to check if card has a limited use that has been used
    }

    removeCurse(usages){
        //a method that removes a curse-state
        //has to check if card has a limited use that has been used
    }


}

class Monster extends Door{
    constructor(type, description, level, treasureNumber) {
        super(type, description);
        this.level = level;
        this.treasureNumber = treasureNumber;
    }

    getLevel(){
        return this.level
    }

}



//test
document.write('<h2 > checking if a html output can be loaded from within the other java-files</h2>');


export{Door, Curses, Monster};