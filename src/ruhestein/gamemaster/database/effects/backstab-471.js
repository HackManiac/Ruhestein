/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Backstab; Deal 2 damage to an enemy minion.

var Backstab471 = {

    basePower: 2,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to an enemy minion.');
    },

    targetLocations: 'opponentBattlefield',

    cast: function(target) {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, target);
    },

};



exports.Backstab471 = Backstab471;
