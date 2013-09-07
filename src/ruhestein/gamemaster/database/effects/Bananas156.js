/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Bananas156 = {

    getDescription: function() {
        return this.formatDescription('Give a friendly minion +1/+1. (+1 Attack/+1 Health)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Bananas156"');
    },

};



exports.Bananas156 = Bananas156;
