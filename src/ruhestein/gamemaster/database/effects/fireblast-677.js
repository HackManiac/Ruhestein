/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Fireblast; Hero Power  Deal 1 damage.

var Fireblast677 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Deal 1 damage.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        this.dealDamage(1, target);
    },

};



exports.Fireblast677 = Fireblast677;
