/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/2 Bloodsail Corsair; Battlecry: Remove 1 Durability from your opponent's weapon.

var BloodsailCorsair453 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Remove 1 Durability from your opponent\'s weapon.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BloodsailCorsair453"');
    },

};



exports.BloodsailCorsair453 = BloodsailCorsair453;
