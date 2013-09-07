/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 0/2 Healing Totem; At the end of your turn, restore 1 Health to all friendly characters.

var HealingTotem275 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, restore 1 Health to all friendly characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HealingTotem275"');
    },

};



exports.HealingTotem275 = HealingTotem275;
