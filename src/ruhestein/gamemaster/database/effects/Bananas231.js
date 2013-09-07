/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Bananas231 = {

    getDescription: function() {
        return this.formatDescription('Give a minion +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Bananas231"');
    },

};



exports.Bananas231 = Bananas231;
