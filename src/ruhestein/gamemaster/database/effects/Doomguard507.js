/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Doomguard507 = {

    getDescription: function() {
        return this.formatDescription('Charge. Battlecry: Discard two random cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Doomguard507"');
    },

};



exports.Doomguard507 = Doomguard507;
