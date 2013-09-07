/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 1/2 Novice Engineer; Battlecry: Draw a card.

var NoviceEngineer435 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Draw a card.');
    },

    cast: function() {
        // nop
    },

    castBattlecry: function() {
        this.getPlayer().drawCard();
    }

};



exports.NoviceEngineer435 = NoviceEngineer435;
