/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/5 Darkscale Healer; Battlecry: Restore 2 Health to all friendly characters.

var DarkscaleHealer84 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Restore 2 Health to all friendly characters.');
    },

    cast: function() {
        var cards = this.collectCardsByLocation('characters');
        cards.forEach(function(card) {
            this.healDamage(2, card);
        }, this);
    },

};



exports.DarkscaleHealer84 = DarkscaleHealer84;
