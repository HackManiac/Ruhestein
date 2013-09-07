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

    targetLocations: 'allCharacters',

    castBattlecry: function(target) {
        this.dealDamage(2, target);
    }

};



exports.StormpikeCommando325 = StormpikeCommando325;
