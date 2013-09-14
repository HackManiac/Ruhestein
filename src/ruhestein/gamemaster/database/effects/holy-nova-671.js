/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (5) Holy Nova; Deal 2 damage to all enemies.  Restore #2 Health to all  friendly characters.

var HolyNova671 = {

    basePower: 2,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage to all enemies.  Restore #2 Health to all  friendly characters.');
    },

    cast: function() {
        var damage = this.getCurrentPower();

        var cards = this.collectCardsByLocation('opponentCharacters');
        cards.forEach(function(card) {
            this.dealDamage(damage, card);
        }, this);

        cards = this.collectCardsByLocation('characters');
        cards.forEach(function(card) {
            this.healDamage(2, card);
        }, this);
    }

};



exports.HolyNova671 = HolyNova671;
