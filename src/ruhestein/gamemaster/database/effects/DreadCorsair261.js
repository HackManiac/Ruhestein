/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DreadCorsair261 = {

    getDescription: function() {
        return this.formatDescription('Taunt. Costs (1) less per Attack of your weapon.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DreadCorsair261"');
    },

};



exports.DreadCorsair261 = DreadCorsair261;
