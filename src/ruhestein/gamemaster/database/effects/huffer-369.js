/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 4/2 Huffer; Charge

var Huffer369 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        this.castCharge();
    },

};



exports.Huffer369 = Huffer369;
