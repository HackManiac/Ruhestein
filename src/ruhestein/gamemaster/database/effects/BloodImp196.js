/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BloodImp196 = {

    getDescription: function() {
        return this.formatDescription('Stealth. Your other minions have +1 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BloodImp196"');
    },

};



exports.BloodImp196 = BloodImp196;
