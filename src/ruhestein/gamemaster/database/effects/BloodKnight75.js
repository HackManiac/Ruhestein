/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BloodKnight75 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: All minions lose Divine Shield. Gain +3/+3 for each Shield lost.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BloodKnight75"');
    },

};



exports.BloodKnight75 = BloodKnight75;
