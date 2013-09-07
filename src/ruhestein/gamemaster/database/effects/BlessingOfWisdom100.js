/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BlessingOfWisdom100 = {

    getDescription: function() {
        return this.formatDescription('Choose a minion.  Whenever it attacks, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BlessingOfWisdom100"');
    },

};



exports.BlessingOfWisdom100 = BlessingOfWisdom100;
