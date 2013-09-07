/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Backstab; Deal 2 damage to an enemy minion.

var Backstab471 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to an enemy minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Backstab471"');
    },

};



exports.Backstab471 = Backstab471;
