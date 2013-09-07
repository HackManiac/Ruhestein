/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 1/1 Twilight Drake; Battlecry: Gain +1/+1 for each card in your hand.

var TwilightDrake360 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Gain +1/+1 for each card in your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TwilightDrake360"');
    },

};



exports.TwilightDrake360 = TwilightDrake360;
