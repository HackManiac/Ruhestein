/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Tracking; Look at the top three cards of your deck. Draw one and discard the others.

var Tracking163 = {

    getDescription: function() {
        return this.formatDescription('Look at the top three cards of your deck. Draw one and discard the others.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Tracking163"');
    },

};



exports.Tracking163 = Tracking163;