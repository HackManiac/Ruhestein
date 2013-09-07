/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var LootHoarder395 = {

    getDescription: function() {
        return this.formatDescription('Deathrattle: Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LootHoarder395"');
    },

};



exports.LootHoarder395 = LootHoarder395;
