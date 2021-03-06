/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Conceal; Give your minions Stealth until your next turn.

var Conceal284 = {

    getDescription: function() {
        return this.formatDescription('Give your minions Stealth until your next turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Conceal284"');
    },

};



exports.Conceal284 = Conceal284;
