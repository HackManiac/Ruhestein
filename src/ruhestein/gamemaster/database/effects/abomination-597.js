/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Abomination; Taunt. Deathrattle: Deal 2 damage to ALL characters.

var Abomination597 = {

    getDescription: function() {
        return this.formatDescription('Taunt. Deathrattle: Deal 2 damage to ALL characters.');
    },

    cast: function() {
        this.castTaunt();
    },

    castDeathrattle: function() {
        var cards = this.collectCardsByLocation('allCharacters');
        cards.forEach(function(card) {
            this.dealDamage(2, card);
        }, this);
    }

};



exports.Abomination597 = Abomination597;
