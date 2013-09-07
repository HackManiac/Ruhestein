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

    cast: function() {
        throw new Error('No cast implementation for effect "Fireblast677"');
    },

};



exports.Fireblast677 = Fireblast677;
