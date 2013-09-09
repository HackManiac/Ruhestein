/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 4/7 Archmage; Spell Power +1

var Archmage545 = {

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



exports.Archmage545 = Archmage545;
