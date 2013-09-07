/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Unleash the Hounds; Give your Beasts +1 Attack and Charge.

var UnleashTheHounds317 = {

    getDescription: function() {
        return this.formatDescription('Give your Beasts +1 Attack and Charge.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "UnleashTheHounds317"');
    },

};



exports.UnleashTheHounds317 = UnleashTheHounds317;
