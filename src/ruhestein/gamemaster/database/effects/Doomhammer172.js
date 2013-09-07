/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Doomhammer172 = {

    getDescription: function() {
        return this.formatDescription('Windfury, Overload: (2)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Doomhammer172"');
    },

};



exports.Doomhammer172 = Doomhammer172;
