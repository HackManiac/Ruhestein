/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Elven Archer; Battlecry: Deal 1 damage.

var ElvenArcher356 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 1 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ElvenArcher356"');
    },

};



exports.ElvenArcher356 = ElvenArcher356;
