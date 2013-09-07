/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Wrath; Deal 1 damage. Draw a card.

var Wrath501 = {

    getDescription: function() {
        return this.formatDescription('Deal 1 damage. Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Wrath501"');
    },

};



exports.Wrath501 = Wrath501;
