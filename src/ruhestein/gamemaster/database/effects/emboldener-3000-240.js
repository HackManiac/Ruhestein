/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 0/4 Emboldener 3000; At the end of your turn, give a random minion +1/+1.

var Emboldener3000240 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, give a random minion +1/+1.');
    },

    cast: function() {
        var didEndTurn = function() {
            var cards = this.collectCardsByLocation('allBattlefields');
            var index = this.getGame().roll(cards.length) - 1;
            var target = cards.at(index);

            this.buffCard(target);
        };

        this.onEndOfPlayerTurn(didEndTurn);
    },

    buff: {
        currentAttack: 1,
        maxHealth: 1
    }

};



exports.Emboldener3000240 = Emboldener3000240;
