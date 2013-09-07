/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/2 Starving Buzzard; Whenever you summon a Beast, draw a card.

var StarvingBuzzard101 = {

    getDescription: function() {
        return this.formatDescription('Whenever you summon a Beast, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StarvingBuzzard101"');
    },

};



exports.StarvingBuzzard101 = StarvingBuzzard101;
