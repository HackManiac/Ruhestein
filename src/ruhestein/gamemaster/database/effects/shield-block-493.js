/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Shield Block; Gain 5 Armor.  Draw a card.

var ShieldBlock493 = {

    getDescription: function() {
        return this.formatDescription('Gain 5 Armor.  Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ShieldBlock493"');
    },

};



exports.ShieldBlock493 = ShieldBlock493;
