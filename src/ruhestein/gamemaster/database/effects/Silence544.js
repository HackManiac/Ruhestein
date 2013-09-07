/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Silence; Silence a minion.

var Silence544 = {

    getDescription: function() {
        return this.formatDescription('Silence a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Silence544"');
    },

};



exports.Silence544 = Silence544;
