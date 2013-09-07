/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var FarSight107 = {

    getDescription: function() {
        return this.formatDescription('Draw a card. That card costs (3) less.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FarSight107"');
    },

};



exports.FarSight107 = FarSight107;
