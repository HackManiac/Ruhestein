/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Nightblade; Battlecry: Deal 3 damage to the enemy hero.

var Nightblade184 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 3 damage to the enemy hero.');
    },

    castBattlecry: function() {
        var target = this.getPlayer().getOpponent().getHero();
        this.dealDamage(3, target);
    },

};



exports.Nightblade184 = Nightblade184;
