/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Frost Shock; Deal 1 damage to an enemy character and Freeze it.

var FrostShock233 = {

    basePower: 1,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to an enemy character and Freeze it.');
    },

    targetLocations: 'opponentCharacters',

    cast: function(target) {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, target);
        target.setIsFrozen(true);
    }

};



exports.FrostShock233 = FrostShock233;
