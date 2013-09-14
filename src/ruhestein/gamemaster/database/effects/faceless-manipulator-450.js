/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 3/3 Faceless Manipulator; Battlecry: Choose a minion and become a copy of it.

var FacelessManipulator450 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Choose a minion and become a copy of it.');
    },

    targetLocations: 'allBattlefields',

    castBattlecry: function(target) {
        var card = this.getPlayer().createCardById(target.getId());
        this.getCard().transformTo(card);
    }

};



exports.FacelessManipulator450 = FacelessManipulator450;
