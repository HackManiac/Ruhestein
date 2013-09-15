/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/1 Loot Hoarder; Deathrattle: Draw a card.

var LootHoarder395 = {

    getDescription: function() {
        return this.formatDescription('Deathrattle: Draw a card.');
    },

    cast: function() {
        // nop
    },

    castDeathrattle: function() {
        this.getPlayer().drawCard();
    }

};



exports.LootHoarder395 = LootHoarder395;
