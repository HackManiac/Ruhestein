/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ElvenArcher356 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 1 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ElvenArcher356"');
    },

};



exports.ElvenArcher356 = ElvenArcher356;
