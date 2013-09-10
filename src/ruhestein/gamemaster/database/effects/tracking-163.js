/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Collection = require('../../models/base/collection');



// From ability card: (1) Tracking; Look at the top three cards of your deck. Draw one and discard the others.

var Tracking163 = {

    getDescription: function() {
        return this.formatDescription('Look at the top three cards of your deck. Draw one and discard the others.');
    },

    cast: function() {
        var drawPile = this.getPlayer().getDrawPile();

        var cards = new Collection();

        var count = 3;
        while (count > 0) {
            if (drawPile.length > 0) {
                var card = drawPile.at(0);
                card.moveTo('transitioningCards');

                cards.add(card);
            }

            count--;
        }

        var didChooseCards = function(chosenCards) {
            var chosenCard = chosenCards.at(0);

            for (var i = 0, n = cards.length; i < n; i++) {
                var card = cards.at(i);
                if (card === chosenCard) {
                    card.moveTo('hand');
                } else {
                    card.moveTo('discardPile');
                }
            }
        };

        this.getPlayer().requestCardChoice(cards, 1, 1, this.getCard(), didChooseCards);
    },

};



exports.Tracking163 = Tracking163;
