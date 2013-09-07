/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (5) Bloodlust; Give your minions +3 Attack this turn.

var Bloodlust256 = {

    getDescription: function() {
        return this.formatDescription('Give your minions +3 Attack this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Bloodlust256"');
    },

};



exports.Bloodlust256 = Bloodlust256;
