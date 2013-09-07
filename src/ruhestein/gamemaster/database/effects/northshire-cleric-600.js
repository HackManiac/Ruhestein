/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 1/3 Northshire Cleric; Whenever a minion is healed, draw a card.

var NorthshireCleric600 = {

    getDescription: function() {
        return this.formatDescription('Whenever a minion is healed, draw a card.');
    },

    cast: function() {
        var didHealDamage = function(info) {
            if (info.card.isMinion()) {
                this.getPlayer().drawCard();
            }
        };

        this.listenToGame('didHealDamage', didHealDamage);
    },

};



exports.NorthshireCleric600 = NorthshireCleric600;
