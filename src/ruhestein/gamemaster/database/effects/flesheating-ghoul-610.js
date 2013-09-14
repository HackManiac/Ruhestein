/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/3 Flesheating Ghoul; Whenever a minion dies, gain +1 Attack.

var FlesheatingGhoul610 = {

    getDescription: function() {
        return this.formatDescription('Whenever a minion dies, gain +1 Attack.');
    },

    cast: function() {
        // nop
    },

    castEffectTrigger: function() {
        var didKillCard = function(info) {
            if (info.card.isMinion()) {
                this.getCard().triggerEffectTrigger();
            }
        };

        this.listenToGame('didKillCard', didKillCard);
    },

    triggerEffectTrigger: function() {
        this.modifySelfBuffStacks(1);
    },

    buff: {
        currentAttack: 1
    }

};



exports.FlesheatingGhoul610 = FlesheatingGhoul610;
