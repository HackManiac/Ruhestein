/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Holy Smite; Deal 2 damage.

var HolySmite409 = {

    basePower: 2,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, target);
    }

};



exports.HolySmite409 = HolySmite409;
