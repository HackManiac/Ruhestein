/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Multi-Shot; Deal 3 damage to two random enemy minions.

var MultiShot407 = {

    basePower: 3,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to two random enemy minions.');
    },

    canCast: function() {
        var candidates = this.collectCardsByLocation('opponentBattlefield');
        return (candidates.length >= 2);
    },

    cast: function() {
        var candidates = this.collectCardsByLocation('opponentBattlefield');
        var index1 = this.getGame().roll(candidates.length) - 1;
        var index2 = this.getGame().roll(candidates.length - 1) - 1;
        if (index2 >= index1) {
            index2++;
        }

        var damage = this.getCurrentPower();
        this.dealDamage(damage, candidates.at(index1));
        this.dealDamage(damage, candidates.at(index2));
    },

};



exports.MultiShot407 = MultiShot407;
