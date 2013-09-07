/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Nightmare334 = {

    getDescription: function() {
        return this.formatDescription('Give a minion +5/+5.  At the start of your next turn, destroy it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Nightmare334"');
    },

};



exports.Nightmare334 = Nightmare334;
