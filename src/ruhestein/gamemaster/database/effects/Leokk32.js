/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Leokk32 = {

    getDescription: function() {
        return this.formatDescription('Other friendly minions have +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Leokk32"');
    },

};



exports.Leokk32 = Leokk32;
