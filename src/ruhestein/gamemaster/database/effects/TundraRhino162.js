/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var TundraRhino162 = {

    getDescription: function() {
        return this.formatDescription('Your Beasts have Charge.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TundraRhino162"');
    },

};



exports.TundraRhino162 = TundraRhino162;
