/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) INFERNO!; Hero Power  Summon a 6/6 Infernal.

var INFERNO83 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Summon a 6/6 Infernal.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "INFERNO83"');
    },

};



exports.INFERNO83 = INFERNO83;
