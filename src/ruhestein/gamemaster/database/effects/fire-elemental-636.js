/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 6/5 Fire Elemental; Battlecry: Deal 3 damage.

var FireElemental636 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 3 damage.');
    },

    targetLocations: 'allCharacters',

    castBattlecry: function(target) {
        this.dealDamage(3, target);
    }

};



exports.FireElemental636 = FireElemental636;
