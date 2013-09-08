/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/2 Starving Buzzard; Whenever you summon a Beast, draw a card.

var StarvingBuzzard101 = {

    getDescription: function() {
        return this.formatDescription('Whenever you summon a Beast, draw a card.');
    },

    cast: function() {
        // nop
    },

    castEffectTrigger: function() {
        var didPlayCard = function(info) {
            if (info.player !== this.getPlayer()) {
                // nop
            } else if (!info.summon) {
                // nop
            } else if (!info.card.isBeast()) {
                // nop
            } else if (info.card === this.getCard()) {
                // nop
            } else {
                this.getCard().triggerEffectTrigger();
            }
        };

        this.listenToGame('didPlayCard', didPlayCard);
    },

    triggerEffectTrigger: function() {
        this.getPlayer().drawCard();
    }

};



exports.StarvingBuzzard101 = StarvingBuzzard101;
