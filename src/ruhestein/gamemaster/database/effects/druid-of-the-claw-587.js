/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Druid of the Claw; Choose One - Charge; or +2 Health and Taunt.

var DruidOfTheClaw587 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Charge; or +2 Health and Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DruidOfTheClaw587"');
    },

};



exports.DruidOfTheClaw587 = DruidOfTheClaw587;
