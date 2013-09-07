/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Arcane Explosion; Deal 1 damage to all enemy minions.

var ArcaneExplosion56 = {

    basePower: 1,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to all enemy minions.');
    },

    cast: function() {
        var damage = this.getCurrentPower();
        var cards = this.collectCardsByLocation('opponentBattlefield');
        cards.forEach(function(card) {
            this.dealDamage(damage, card);
        }, this);
    },

};



exports.ArcaneExplosion56 = ArcaneExplosion56;
