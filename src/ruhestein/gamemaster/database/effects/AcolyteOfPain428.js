/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 1/3 Acolyte of Pain; Whenever this minion takes damage, draw a card.

var AcolyteOfPain428 = {

    getDescription: function() {
        return this.formatDescription('Whenever this minion takes damage, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AcolyteOfPain428"');
    },

};



exports.AcolyteOfPain428 = AcolyteOfPain428;
