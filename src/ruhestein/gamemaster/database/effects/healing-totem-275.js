/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 0/2 Healing Totem; At the end of your turn, restore 1 Health to all friendly characters.

var HealingTotem275 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, restore 1 Health to all friendly characters.');
    },

    cast: function() {
        // nop
    },

    castEffectTrigger: function() {
        var didEndTurn = function() {
            this.getCard().triggerEffectTrigger();
        };

        this.onEndOfPlayerTurn(didEndTurn);
    },

    triggerEffectTrigger: function() {
        var cards = this.collectCardsByLocation('characters');
        cards.forEach(function(card) {
            this.healDamage(1, card);
        }, this);
    }

};



exports.HealingTotem275 = HealingTotem275;
