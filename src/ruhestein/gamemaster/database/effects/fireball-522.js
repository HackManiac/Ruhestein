/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Fireball; Deal 6 damage.

var Fireball522 = {

    basePower: 6,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage.');
    },

    targetLocations: 'allCharacters',
    
    cast: function(target) {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, target);
    },

};



exports.Fireball522 = Fireball522;
