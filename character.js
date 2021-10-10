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

    fight(monster){
        //method that compaes a monster class level with character-level
        // and adds all possible bonusses available in combat to the calculation
    };

    runFrom(monster){
        //method that rolls a die to figure out if a character successfully escapes a monster
        //Applies bad-stuff from monster if failed.
    };

}

export{Character};