/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (9) 8/8 Alexstrasza; Battlecry: Set a hero's remaining Health to 15.

var Alexstrasza303 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Set a hero\'s remaining Health to 15.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Alexstrasza303"');
    },

};



exports.Alexstrasza303 = Alexstrasza303;
