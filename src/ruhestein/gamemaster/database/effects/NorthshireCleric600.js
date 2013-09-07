/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var NorthshireCleric600 = {

    getDescription: function() {
        return this.formatDescription('Whenever a minion is healed, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "NorthshireCleric600"');
    },

};



exports.NorthshireCleric600 = NorthshireCleric600;
