/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Poultryizer405 = {

    getDescription: function() {
        return this.formatDescription('At the start of your turn, transform a random minion into a 1/1 Chicken.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Poultryizer405"');
    },

};



exports.Poultryizer405 = Poultryizer405;
