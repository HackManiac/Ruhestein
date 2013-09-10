/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Mind Blast; Deal 5 damage to the enemy hero.

var MindBlast415 = {

    basePower: 5,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to the enemy hero.');
    },

    cast: function() {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, this.getPlayer().getOpponentHero());
    },

};



exports.MindBlast415 = MindBlast415;
