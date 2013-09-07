/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MindControl401 = {

    getDescription: function() {
        return this.formatDescription('Take control of an enemy minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MindControl401"');
    },

};



exports.MindControl401 = MindControl401;
