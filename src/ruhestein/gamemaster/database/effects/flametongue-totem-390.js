/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 0/3 Flametongue Totem; Adjacent minions have +2 Attack.

var FlametongueTotem390 = {

    getDescription: function() {
        return this.formatDescription('Adjacent minions have +2 Attack.');
    },

    cast: function() {
        this.buffAdjacentCards();
    },

    buff: {
        currentAttack: 2
    }

};



exports.FlametongueTotem390 = FlametongueTotem390;
