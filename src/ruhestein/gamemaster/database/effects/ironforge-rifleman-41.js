/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/2 Ironforge Rifleman; Battlecry: Deal 1 damage.

var IronforgeRifleman41 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 1 damage.');
    },

    targetLocations: 'allBattlefields',

    castBattlecry: function(target) {
        this.dealDamage(1, target);
    }

};



exports.IronforgeRifleman41 = IronforgeRifleman41;
