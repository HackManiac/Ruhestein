/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Innervate; Gain 2 Mana Crystals this turn only.

var Innervate548 = {

    getDescription: function() {
        return this.formatDescription('Gain 2 Mana Crystals this turn only.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Innervate548"');
    },

};



exports.Innervate548 = Innervate548;
