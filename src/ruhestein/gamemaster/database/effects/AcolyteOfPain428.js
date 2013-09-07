/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AcolyteOfPain428 = {

    getDescription: function() {
        return this.formatDescription('Whenever this minion takes damage, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AcolyteOfPain428"');
    },

};



exports.AcolyteOfPain428 = AcolyteOfPain428;
