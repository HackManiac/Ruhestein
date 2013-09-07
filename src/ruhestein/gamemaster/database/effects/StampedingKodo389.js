/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 3/5 Stampeding Kodo; Battlecry: Destroy a random enemy minion with 2 or less Attack.

var StampedingKodo389 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy a random enemy minion with 2 or less Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StampedingKodo389"');
    },

};



exports.StampedingKodo389 = StampedingKodo389;
