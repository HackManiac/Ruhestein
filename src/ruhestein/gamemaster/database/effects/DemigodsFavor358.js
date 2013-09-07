/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DemigodsFavor358 = {

    getDescription: function() {
        return this.formatDescription('Give your other minions +2/+2.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DemigodsFavor358"');
    },

};



exports.DemigodsFavor358 = DemigodsFavor358;
