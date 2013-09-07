/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Windspeaker151 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly minion Windfury.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Windspeaker151"');
    },

};



exports.Windspeaker151 = Windspeaker151;
