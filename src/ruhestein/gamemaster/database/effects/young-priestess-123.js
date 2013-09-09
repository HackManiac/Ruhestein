/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 2/1 Young Priestess; At the end of your turn, give another random friendly minion +1 Health.

var YoungPriestess123 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, give another random friendly minion +1 Health.');
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
        var source = this.getCard();

        var candidates = this.collectCardsByLocation('battlefield', function(card) {
            return (card !== source);
        });

        if (candidates.length > 0) {
            var index = this.getGame().roll(candidates.length) - 1;
            var card = candidates.at(index);
            this.buffCard(card);
        }
    },

    buff: {
        maxHealth: 1
    }

};



exports.YoungPriestess123 = YoungPriestess123;
