/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 0/4 Lightspawn; This minion's Attack is always equal to its Health.

var Lightspawn192 = {

    getDescription: function() {
        return this.formatDescription('This minion\'s Attack is always equal to its Health.');
    },

    cast: function() {
        var _this = this;

        var updateCard = function() {
            var card = _this.getCard();
            card.setCurrentAttack(card.getCurrentHealth());
        };

        this.listenToCard('change:currentHealth', function() {
            updateCard();
        });

        updateCard();
    }

};



exports.Lightspawn192 = Lightspawn192;
