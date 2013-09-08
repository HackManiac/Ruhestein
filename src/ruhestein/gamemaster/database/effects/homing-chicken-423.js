/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 0/1 Homing Chicken; At the start of your turn, destroy this minion and draw 3 cards.

var HomingChicken423 = {

    getDescription: function() {
        return this.formatDescription('At the start of your turn, destroy this minion and draw 3 cards.');
    },

    cast: function() {
        var didStartTurn = function() {
            this.getPlayer().drawCards(3);
            this.killCard(this.getCard());
        };

        this.onStartOfPlayerTurn(didStartTurn);
    },

};



exports.HomingChicken423 = HomingChicken423;
