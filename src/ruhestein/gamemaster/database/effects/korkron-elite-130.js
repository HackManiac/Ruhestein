/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 4/3 Kor'kron Elite; Charge

var KorkronElite130 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        this.castCharge();
    }

};



exports.KorkronElite130 = KorkronElite130;
