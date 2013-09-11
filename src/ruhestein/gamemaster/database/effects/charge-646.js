/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Charge; Give a friendly minion Charge.

var Charge646 = {

    getDescription: function() {
        return this.formatDescription('Give a friendly minion Charge.');
    },

    targetLocations: 'battlefield',

    cast: function(target) {
        this.castCharge(target);
    }

};



exports.Charge646 = Charge646;
