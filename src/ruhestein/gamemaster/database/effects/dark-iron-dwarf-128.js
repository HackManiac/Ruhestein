/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 4/4 Dark Iron Dwarf; Battlecry: Give a minion +2 Attack.

var DarkIronDwarf128 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a minion +2 Attack.');
    },

    targetLocations: 'allBattlefields',

    castBattlecry: function(target) {
        this.buffCard(target);
    },

    buff: {
        currentAttack: 2
    }

};



exports.DarkIronDwarf128 = DarkIronDwarf128;
