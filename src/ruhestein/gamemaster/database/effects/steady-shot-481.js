/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Steady Shot; Hero Power  Deal 2 damage to the enemy hero.

var SteadyShot481 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Deal 2 damage to the enemy hero.');
    },

    cast: function() {
        var target = this.getPlayer().getOpponentHero();
        this.dealDamage(2, target);
    },

};



exports.SteadyShot481 = SteadyShot481;
