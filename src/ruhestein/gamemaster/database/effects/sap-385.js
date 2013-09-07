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

    cast: function() {
        throw new Error('No cast implementation for effect "Sap385"');
    },

};



exports.Sap385 = Sap385;