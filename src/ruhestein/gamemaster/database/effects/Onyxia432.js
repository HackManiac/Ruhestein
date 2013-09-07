/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (9) 8/8 Onyxia; Battlecry: Summon 1/1 Whelps until your side of the battlefield is full.

var Onyxia432 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon 1/1 Whelps until your side of the battlefield is full.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Onyxia432"');
    },

};



exports.Onyxia432 = Onyxia432;
