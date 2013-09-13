/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Equality; Change the Health of ALL minions to 1.

var Equality383 = {

    getDescription: function() {
        return this.formatDescription('Change the Health of ALL minions to 1.');
    },

    cast: function() {
        var cards = this.collectCardsByLocation('allBattlefields');
        cards.forEach(function(card) {
            card.setDamage(card.getMaxHealth() - 1);
        });
    }

};



exports.Equality383 = Equality383;
