/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Greater Heal; Restore 2 Health to a character for each card in your opponent's hand.

var GreaterHeal457 = {

    getDescription: function() {
        return this.formatDescription('Restore 2 Health to a character for each card in your opponent\'s hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GreaterHeal457"');
    },

};



exports.GreaterHeal457 = GreaterHeal457;
