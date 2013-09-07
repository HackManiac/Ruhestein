/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From weapon card: (5) 2/8 Doomhammer; Windfury, Overload: (2)

var Doomhammer172 = {

    getDescription: function() {
        return this.formatDescription('Windfury, Overload: (2)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Doomhammer172"');
    },

};



exports.Doomhammer172 = Doomhammer172;
