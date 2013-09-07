/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Hand of Protection; Give a minion Divine Shield.

var HandOfProtection499 = {

    getDescription: function() {
        return this.formatDescription('Give a minion Divine Shield.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HandOfProtection499"');
    },

};



exports.HandOfProtection499 = HandOfProtection499;
