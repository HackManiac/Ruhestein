/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Drain Life; Deal 2 damage. Restore #2 Health to your hero.

var DrainLife332 = {

    basePower: 2,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage. Restore #2 Health to your hero.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, target);
        this.healDamage(2, this.getPlayer().getHero());
    }

};



exports.DrainLife332 = DrainLife332;
