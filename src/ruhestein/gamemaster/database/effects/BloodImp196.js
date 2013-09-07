/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Blood Imp; Stealth. Your other minions have +1 Health.

var BloodImp196 = {

    getDescription: function() {
        return this.formatDescription('Stealth. Your other minions have +1 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BloodImp196"');
    },

};



exports.BloodImp196 = BloodImp196;
