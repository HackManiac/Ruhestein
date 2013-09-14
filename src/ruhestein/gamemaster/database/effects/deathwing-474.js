/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (10) 12/12 Deathwing; Battlecry: Destroy all other minions and discard your hand.

var Deathwing474 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy all other minions and discard your hand.');
    },

    castBattlecry: function() {
        var source = this.getCard();

        var cards = this.collectCardsByLocation('allBattlefields', function(card) {
            return (card !== source);
        });

        cards.forEach(function(card) {
            this.killCard(card);
        }, this);

        cards = this.collectCardsByLocation('hand');

        cards.forEach(function(card) {
            card.moveTo('discardPile');
        });
    }

};



exports.Deathwing474 = Deathwing474;
