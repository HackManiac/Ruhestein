/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/2 Scavenging Hyena; Whenever a Beast dies, gain +2/+1.

var ScavengingHyena279 = {

    getDescription: function() {
        return this.formatDescription('Whenever a Beast dies, gain +2/+1.');
    },

    cast: function() {
        // nop
    },

    castEffectTrigger: function() {
        var didKillCard = function(info) {
            if (info.card.isBeast()) {
                this.getCard().triggerEffectTrigger();
            }
        };

        this.listenToGame('didKillCard', didKillCard);
    },

    triggerEffectTrigger: function() {
        this.modifySelfBuffStacks(1);
    },

    buff: {
        currentAttack: 2,
        maxHealth: 1
    }

};



exports.ScavengingHyena279 = ScavengingHyena279;
