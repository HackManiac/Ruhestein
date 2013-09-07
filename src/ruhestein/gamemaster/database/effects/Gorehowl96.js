/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Gorehowl96 = {

    getDescription: function() {
        return this.formatDescription('Attacking a minion costs 1 Attack instead of 1 Durability.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Gorehowl96"');
    },

};



exports.Gorehowl96 = Gorehowl96;
