/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var FaerieDragon213 = {

    getDescription: function() {
        return this.formatDescription('Can\'t be targeted by Spells or Hero Powers.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FaerieDragon213"');
    },

};



exports.FaerieDragon213 = FaerieDragon213;
