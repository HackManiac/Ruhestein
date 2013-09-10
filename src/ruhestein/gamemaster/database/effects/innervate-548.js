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
        var buff = this.buffCard(null);

        this.onEndOfNextPlayerTurn(function() {
            buff.uncast();
        });
    },

    castBuff: function() {
        var player = this.getPlayer();
        player.modifyMaxMana(2);
        player.modifyCurrentMana(2);
    },

    uncastBuff: function() {
        this.getPlayer().modifyMaxMana(-2);
        this.getPlayer().modifyCurrentMana(0);
    }

};



exports.Innervate548 = Innervate548;
