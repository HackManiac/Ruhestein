/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Sinister Strike; Deal 3 damage to the enemy hero.

var SinisterStrike205 = {

    basePower: 3,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to the enemy hero.');
    },

    cast: function() {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, this.getPlayer().getOpponentHero());
    }

};



exports.SinisterStrike205 = SinisterStrike205;
