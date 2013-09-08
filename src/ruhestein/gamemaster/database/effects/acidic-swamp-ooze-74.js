/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 3/2 Acidic Swamp Ooze; Battlecry: Destroy your opponent's weapon.

var AcidicSwampOoze74 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy your opponent\'s weapon.');
    },

    castBattlecry: function() {
        var weapon = this.getPlayer().getOpponentWeapon();
        if (weapon) {
            this.killCard(weapon);
        }
    },

};



exports.AcidicSwampOoze74 = AcidicSwampOoze74;
