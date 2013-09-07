/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var TheBlackKnight396 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy a minion with Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TheBlackKnight396"');
    },

};



exports.TheBlackKnight396 = TheBlackKnight396;
