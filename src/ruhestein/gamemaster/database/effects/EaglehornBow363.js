/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var EaglehornBow363 = {

    getDescription: function() {
        return this.formatDescription('Whenever a Secret is revealed, gain +1 Durability.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "EaglehornBow363"');
    },

};



exports.EaglehornBow363 = EaglehornBow363;
