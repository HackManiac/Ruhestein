/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DruidOfTheClaw408 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DruidOfTheClaw408"');
    },

};



exports.DruidOfTheClaw408 = DruidOfTheClaw408;
