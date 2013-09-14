/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Moonfire; Deal 2 damage.

var Moonfire111 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        this.dealDamage(2, target);
    }

};



exports.Moonfire111 = Moonfire111;
