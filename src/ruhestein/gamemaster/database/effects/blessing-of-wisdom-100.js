/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Blessing of Wisdom; Choose a minion.  Whenever it attacks, draw a card.

var BlessingOfWisdom100 = {

    getDescription: function() {
        return this.formatDescription('Choose a minion.  Whenever it attacks, draw a card.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        this.listenToGame('didPlayCard', function(info) {
            if ((info.card === target) && info.attack) {
                this.getPlayer().drawCard();
            }
        });
    },

};



exports.BlessingOfWisdom100 = BlessingOfWisdom100;
