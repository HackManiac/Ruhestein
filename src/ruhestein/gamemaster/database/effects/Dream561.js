/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Dream561 = {

    getDescription: function() {
        return this.formatDescription('Return a minion to its owner\'s hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Dream561"');
    },

};



exports.Dream561 = Dream561;
