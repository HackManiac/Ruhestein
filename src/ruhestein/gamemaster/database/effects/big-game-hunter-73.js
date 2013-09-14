/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 4/2 Big Game Hunter; Battlecry: Destroy a minion with an Attack of 7 or more.

var BigGameHunter73 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy a minion with an Attack of 7 or more.');
    },

    targetLocations: 'allBattlefields',

    targetFilter: function(card) {
        return (card.getCurrentAttack() >= 7);
    },

    castBattlecry: function(target) {
        this.killCard(target);
    }

};



exports.BigGameHunter73 = BigGameHunter73;
