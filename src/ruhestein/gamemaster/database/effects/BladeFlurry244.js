/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BladeFlurry244 = {

    getDescription: function() {
        return this.formatDescription('Destroy your weapon and deal its damage to all enemies.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BladeFlurry244"');
    },

};



exports.BladeFlurry244 = BladeFlurry244;
