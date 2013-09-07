/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (6) Vanish; Return all minions to their owner's hand.

var Vanish658 = {

    getDescription: function() {
        return this.formatDescription('Return all minions to their owner\'s hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Vanish658"');
    },

};



exports.Vanish658 = Vanish658;
