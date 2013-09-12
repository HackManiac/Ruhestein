/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 1/4 Demolisher; At the start of your turn, deal 2 damage to a random enemy.

var Demolisher212 = {

    getDescription: function() {
        return this.formatDescription('At the start of your turn, deal 2 damage to a random enemy.');
    },

    cast: function() {
        // nop
    },
    
    castEffectTrigger: function() {
        this.onStartOfPlayerTurn(function() {
            this.getCard().triggerEffectTrigger();
        });
    },

    triggerEffectTrigger: function() {
        var candidates = this.collectCardsByLocation('opponentCharacters');
        if (candidates.length > 0) {
            var index = this.getGame().roll(candidates.length) - 1;
            var target = candidates.at(index);
            this.dealDamage(2, target);
        }
    }

};



exports.Demolisher212 = Demolisher212;
