/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Consecration; Deal 2 damage to all enemies.

var Consecration260 = {

    basePower: 2,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to all enemies.');
    },

    cast: function() {
        var damage = this.getCurrentPower();

        var cards = this.collectCardsByLocation('opponentCharacters');

        cards.forEach(function(card) {
            this.dealDamage(damage, card);
        }, this);
    }

};



exports.Consecration260 = Consecration260;
