/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Wrath; Choose One - Deal 3 damage; or Deal 1 damage and draw a card.

var Wrath633 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Deal 3 damage; or Deal 1 damage and draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Wrath633"');
    },

};



exports.Wrath633 = Wrath633;
