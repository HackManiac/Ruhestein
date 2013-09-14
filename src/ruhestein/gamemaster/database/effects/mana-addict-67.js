/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 1/3 Mana Addict; Whenever you cast a spell, gain +2 Attack this turn.

var ManaAddict67 = {

    getDescription: function() {
        return this.formatDescription('Whenever you cast a spell, gain +2 Attack this turn.');
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

        var didEndTurn = function() {
            this.setSelfBuffStacks(0);
        };

        this.listenToGame('didPlayCard', didPlayCard);
        this.onEndOfPlayerTurn(didEndTurn);
    },

    triggerEffectTrigger: function() {
        this.modifySelfBuffStacks(1);
    },

    buff: {
        currentAttack: 2
    }

};



exports.ManaAddict67 = ManaAddict67;
