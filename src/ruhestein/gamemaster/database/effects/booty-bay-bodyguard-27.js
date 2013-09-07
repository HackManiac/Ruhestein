/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 5/4 Booty Bay Bodyguard; Taunt

var BootyBayBodyguard27 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BootyBayBodyguard27"');
    },

};



exports.BootyBayBodyguard27 = BootyBayBodyguard27;
