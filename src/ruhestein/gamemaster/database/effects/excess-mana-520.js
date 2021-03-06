/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Excess Mana; Draw a card. (You can only have 10 Mana in your tray.)

var ExcessMana520 = {

    getDescription: function() {
        return this.formatDescription('Draw a card. (You can only have 10 Mana in your tray.)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ExcessMana520"');
    },

};



exports.ExcessMana520 = ExcessMana520;
