/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (8) 8/8 Ragnaros the Firelord; Can't Attack.  At the end of your turn, deal 8 damage to a random enemy.

var RagnarosTheFirelord503 = {

    getDescription: function() {
        return this.formatDescription('Can\'t Attack.  At the end of your turn, deal 8 damage to a random enemy.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "RagnarosTheFirelord503"');
    },

};



exports.RagnarosTheFirelord503 = RagnarosTheFirelord503;
