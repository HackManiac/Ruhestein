/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 4/5 The Black Knight; Battlecry: Destroy a minion with Taunt.

var TheBlackKnight396 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy a minion with Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TheBlackKnight396"');
    },

};



exports.TheBlackKnight396 = TheBlackKnight396;
