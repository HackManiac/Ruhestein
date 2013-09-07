/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Fade; Give your minions Taunt. Draw a card.

var Fade547 = {

    getDescription: function() {
        return this.formatDescription('Give your minions Taunt. Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Fade547"');
    },

};



exports.Fade547 = Fade547;
