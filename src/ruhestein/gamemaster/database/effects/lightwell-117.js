/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 0/5 Lightwell; At the start of your turn, restore 3 Health to a damaged friendly character.

var Lightwell117 = {

    getDescription: function() {
        return this.formatDescription('At the start of your turn, restore 3 Health to a damaged friendly character.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Lightwell117"');
    },

};



exports.Lightwell117 = Lightwell117;
