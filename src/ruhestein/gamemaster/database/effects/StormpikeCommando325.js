/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/2 Stormpike Commando; Battlecry: Deal 2 damage.

var StormpikeCommando325 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 2 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StormpikeCommando325"');
    },

};



exports.StormpikeCommando325 = StormpikeCommando325;
