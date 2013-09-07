/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Far Sight; Draw a card. That card costs (3) less.

var FarSight107 = {

    getDescription: function() {
        return this.formatDescription('Draw a card. That card costs (3) less.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FarSight107"');
    },

};



exports.FarSight107 = FarSight107;
