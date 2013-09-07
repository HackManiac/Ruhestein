/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var LightningBolt10 = {

    getDescription: function() {
        return this.formatDescription('Deal 3 damage. Overload: (1)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LightningBolt10"');
    },

};



exports.LightningBolt10 = LightningBolt10;
