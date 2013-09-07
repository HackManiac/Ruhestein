/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var FrostElemental598 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Freeze a character.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FrostElemental598"');
    },

};



exports.FrostElemental598 = FrostElemental598;
