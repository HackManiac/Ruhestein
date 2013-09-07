/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (9) 4/12 Malygos; Spell Power +5

var Malygos241 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +5');
    },

    cast: function() {
        this.buffCard(null);
    },

    castBuff: function() {
        this.getPlayer().modifySpellPower(5);
    },

    uncastBuff: function() {
        this.getPlayer().modifySpellPower(-5);
    }

};



exports.Malygos241 = Malygos241;
