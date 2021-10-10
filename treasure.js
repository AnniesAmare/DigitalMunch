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

export{Treasure, Equipment, Item};