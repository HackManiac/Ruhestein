/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 1/4 Frothing Berserker; Whenever a minion takes damage, gain +1 Attack.

var FrothingBerserker69 = {

    getDescription: function() {
        return this.formatDescription('Whenever a minion takes damage, gain +1 Attack.');
    },

    cast: function() {
        // nop
    },

    castEffectTrigger: function() {
        var didDealDamage = function(info) {
            if (info.card.isMinion()) {
                this.getCard().triggerEffectTrigger();
            }
        };

        this.listenToGame('didDealDamage', didDealDamage);
    },

    triggerEffectTrigger: function() {
        this.modifySelfBuffStacks(1);
    },

    buff: {
        currentAttack: 1
    }

};



exports.FrothingBerserker69 = FrothingBerserker69;
