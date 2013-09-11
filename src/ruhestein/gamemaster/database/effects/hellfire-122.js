/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Hellfire; Deal 3 damage to ALL characters.

var Hellfire122 = {

    basePower: 3,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to ALL characters.');
    },

    cast: function() {
        var damage = this.getCurrentPower();

        var cards = this.collectCardsByLocation('allCharacters');
        cards.forEach(function(card) {
            this.dealDamage(damage, card);
        }, this);
    }

};



exports.Hellfire122 = Hellfire122;
