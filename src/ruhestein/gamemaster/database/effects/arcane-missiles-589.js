/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Arcane Missiles; Shoot 3 missiles at random enemies for 1 damage each.

var ArcaneMissiles589 = {

    basePower: 3,

    getDescription: function() {
        return this.formatDescription('Shoot {P} missiles at random enemies for 1 damage each.');
    },

    cast: function() {
        var count = this.getCurrentPower(), damage = 1;
        for (var i = 0; i < count; i++) {
            var card = this.getRandomCardByLocation('opponentCharacters');
            this.dealDamage(damage, card);
        }
    },

};



exports.ArcaneMissiles589 = ArcaneMissiles589;
