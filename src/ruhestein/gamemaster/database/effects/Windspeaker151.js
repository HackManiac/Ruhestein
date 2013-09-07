/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 3/3 Windspeaker; Battlecry: Give a friendly minion Windfury.

var Windspeaker151 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly minion Windfury.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Windspeaker151"');
    },

};



exports.Windspeaker151 = Windspeaker151;
