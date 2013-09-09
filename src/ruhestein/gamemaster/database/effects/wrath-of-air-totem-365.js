/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 0/2 Wrath of Air Totem; Spell Power +1

var WrathOfAirTotem365 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1');
    },

    cast: function() {
        this.buffCard(null);
    },

    castBuff: function() {
        this.getPlayer().modifySpellPower(1);
    },

    uncastBuff: function() {
        this.getPlayer().modifySpellPower(-1);
    }

};



exports.WrathOfAirTotem365 = WrathOfAirTotem365;
