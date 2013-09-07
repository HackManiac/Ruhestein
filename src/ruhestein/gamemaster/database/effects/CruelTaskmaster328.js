/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/1 Cruel Taskmaster; Battlecry: Deal 1 damage to a minion and give it +2 Attack.

var CruelTaskmaster328 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 1 damage to a minion and give it +2 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CruelTaskmaster328"');
    },

};



exports.CruelTaskmaster328 = CruelTaskmaster328;
