/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Druid of the Claw; Charge

var DruidOfTheClaw408 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        this.castCharge();
    }

};



exports.DruidOfTheClaw408 = DruidOfTheClaw408;
