/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Flames of Azzinoth; Hero Power  Summon two 2/1 minions.

var FlamesOfAzzinoth349 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Summon two 2/1 minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FlamesOfAzzinoth349"');
    },

};



exports.FlamesOfAzzinoth349 = FlamesOfAzzinoth349;
