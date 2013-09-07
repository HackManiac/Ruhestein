/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Sap; Return an enemy minion to its owner's hand.

var Sap385 = {

    getDescription: function() {
        return this.formatDescription('Return an enemy minion to its owner\'s hand.');
    },

    targetLocations: 'opponentBattlefield',

    cast: function(target) {
        target.moveTo('hand');
    },

};



exports.Sap385 = Sap385;
