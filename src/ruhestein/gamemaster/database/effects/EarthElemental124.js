/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var EarthElemental124 = {

    getDescription: function() {
        return this.formatDescription('Taunt. Overload: (3)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "EarthElemental124"');
    },

};



exports.EarthElemental124 = EarthElemental124;
