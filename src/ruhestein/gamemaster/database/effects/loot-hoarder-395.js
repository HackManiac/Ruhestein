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
        throw new Error('No cast implementation for effect "LootHoarder395"');
    },

};



exports.LootHoarder395 = LootHoarder395;
