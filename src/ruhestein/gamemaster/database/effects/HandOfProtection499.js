/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var HandOfProtection499 = {

    getDescription: function() {
        return this.formatDescription('Give a minion Divine Shield.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HandOfProtection499"');
    },

};



exports.HandOfProtection499 = HandOfProtection499;
