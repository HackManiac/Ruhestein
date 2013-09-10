/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Shadow Bolt; Deal 4 damage to a minion.

var ShadowBolt647 = {

    basePower: 4,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to a minion.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, target);
    }

};



exports.ShadowBolt647 = ShadowBolt647;
