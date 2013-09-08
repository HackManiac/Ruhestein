/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 0/3 Poultryizer; At the start of your turn, transform a random minion into a 1/1 Chicken.

var Poultryizer405 = {

    cardFilters: {
        chicken: {
            name: 'Chicken',
            attack: 1,
            health: 1,
            isToken: true
        }
    },
    
    getDescription: function() {
        return this.formatDescription('At the start of your turn, transform a random minion into a 1/1 Chicken.');
    },

    cast: function() {
        var didStartTurn = function() {
            var cards = this.collectCardsByLocation('allBattlefields');
            var index = this.getGame().roll(cards.length) - 1;
            var target = cards.at(index);

            var card = this.createNamedCard('chicken');

            target.transformTo(card);
        };

        this.onStartOfPlayerTurn(didStartTurn);
    },

};



exports.Poultryizer405 = Poultryizer405;
