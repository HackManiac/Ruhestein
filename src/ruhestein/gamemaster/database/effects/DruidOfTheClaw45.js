/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DruidOfTheClaw45 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DruidOfTheClaw45"');
    },

};



exports.DruidOfTheClaw45 = DruidOfTheClaw45;
