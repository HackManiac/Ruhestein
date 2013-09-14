/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Shield Slam; Deal 1 damage to a minion for each Armor you have.

var ShieldSlam50 = {

    getDescription: function() {
        return this.formatDescription('Deal 1 damage to a minion for each Armor you have.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        var damage = 1 * this.getPlayer().getCurrentArmor();
        this.dealDamage(damage, target);
    }

};



exports.ShieldSlam50 = ShieldSlam50;
