/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Frostbolt; Deal 3 damage to a character and Freeze it.

var Frostbolt177 = {

    basePower: 3,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to a character and Freeze it.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, target);
        target.setIsFrozen(true);
    },

};



exports.Frostbolt177 = Frostbolt177;
