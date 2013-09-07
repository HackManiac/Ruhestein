/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (8) Mind Control; Take control of an enemy minion.

var MindControl401 = {

    getDescription: function() {
        return this.formatDescription('Take control of an enemy minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MindControl401"');
    },

};



exports.MindControl401 = MindControl401;
