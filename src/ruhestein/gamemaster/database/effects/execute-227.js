/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Execute; Destroy a damaged enemy minion.

var Execute227 = {

    getDescription: function() {
        return this.formatDescription('Destroy a damaged enemy minion.');
    },

    targetLocations: 'allBattlefields',

    targetFilter: function(card) {
        return (card.getDamage() > 0);
    },

    cast: function(target) {
        this.killCard(target);
    }

};



exports.Execute227 = Execute227;
