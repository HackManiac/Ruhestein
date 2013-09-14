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
        // nop
    },

    castEffectTrigger: function() {
        var didHealDamage = function(info) {
            if (info.card.isMinion()) {
                this.getCard().triggerEffectTrigger();
            }
        };

        this.listenToGame('didHealDamage', didHealDamage);
    },

    triggerEffectTrigger: function() {
        this.getPlayer().drawCard();
    }

};



exports.NorthshireCleric600 = NorthshireCleric600;
