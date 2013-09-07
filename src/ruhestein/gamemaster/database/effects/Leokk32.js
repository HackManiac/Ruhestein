/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/4 Leokk; Other friendly minions have +1 Attack.

var Leokk32 = {

    getDescription: function() {
        return this.formatDescription('Other friendly minions have +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Leokk32"');
    },

};



exports.Leokk32 = Leokk32;
