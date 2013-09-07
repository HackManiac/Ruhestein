/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 3/5 Sen'jin Shieldmasta; Taunt

var SenjinShieldmasta326 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SenjinShieldmasta326"');
    },

};



exports.SenjinShieldmasta326 = SenjinShieldmasta326;
