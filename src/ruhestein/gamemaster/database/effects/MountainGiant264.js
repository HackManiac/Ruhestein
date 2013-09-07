/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (12) 8/8 Mountain Giant; Costs (1) less for each other card in your hand.

var MountainGiant264 = {

    getDescription: function() {
        return this.formatDescription('Costs (1) less for each other card in your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MountainGiant264"');
    },

};



exports.MountainGiant264 = MountainGiant264;
