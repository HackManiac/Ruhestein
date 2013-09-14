/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Mass Dispel; Silence all enemy minions. Draw a card.

var MassDispel249 = {

    getDescription: function() {
        return this.formatDescription('Silence all enemy minions. Draw a card.');
    },

    cast: function() {
        var cards = this.collectCardsByLocation('opponentBattlefield');
        cards.forEach(function(card) {
            card.silence();
        });
        this.getPlayer().drawCard();
    }

};



exports.MassDispel249 = MassDispel249;
