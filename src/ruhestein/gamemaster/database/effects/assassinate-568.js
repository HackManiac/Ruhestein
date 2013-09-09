/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (5) Assassinate; Destroy an enemy minion.

var Assassinate568 = {

    getDescription: function() {
        return this.formatDescription('Destroy an enemy minion.');
    },

    targetLocations: 'opponentBattlefield',

    cast: function(target) {
        this.killCard(target);
    }

};



exports.Assassinate568 = Assassinate568;
