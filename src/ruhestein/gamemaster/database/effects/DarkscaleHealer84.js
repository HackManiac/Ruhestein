/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DarkscaleHealer84 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Restore 2 Health to all friendly characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DarkscaleHealer84"');
    },

};



exports.DarkscaleHealer84 = DarkscaleHealer84;
