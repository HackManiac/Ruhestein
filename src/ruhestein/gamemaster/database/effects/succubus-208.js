/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 4/3 Succubus; Battlecry: Discard a random card.

var Succubus208 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Discard a random card.');
    },

    castBattlecry: function() {
        var count = this.getPlayer().getHand().length;
        if (count > 0) {
            var index = this.getGame().roll(count) - 1;
            var card = this.getPlayer().getHand().at(index);
            card.moveTo('discardPile');
        }
    },

};



exports.Succubus208 = Succubus208;
