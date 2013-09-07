/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/6 Druid of the Claw; Taunt

var DruidOfTheClaw45 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DruidOfTheClaw45"');
    },

};



exports.DruidOfTheClaw45 = DruidOfTheClaw45;
