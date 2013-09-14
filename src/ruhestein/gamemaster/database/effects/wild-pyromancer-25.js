/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 3/2 Wild Pyromancer; After you cast a spell, deal 1 damage to ALL minions.

var WildPyromancer25 = {

    getDescription: function() {
        return this.formatDescription('After you cast a spell, deal 1 damage to ALL minions.');
    },

    cast: function() {
        // nop
    },

    castEffectTrigger: function() {
        var didPlayCard = function(info) {
            if ((info.player === this.getPlayer()) && info.card.isSpell()) {
                this.getCard().triggerEffectTrigger();
            }
        };

        this.listenToGame('didPlayCard', didPlayCard);
    },

    triggerEffectTrigger: function() {
        var cards = this.collectCardsByLocation('allBattlefields');
        cards.forEach(function(card) {
            this.dealDamage(1, card);
        }, this);
    }

};



exports.WildPyromancer25 = WildPyromancer25;
