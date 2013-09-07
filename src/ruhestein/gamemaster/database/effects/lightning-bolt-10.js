/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Lightning Bolt; Deal 3 damage. Overload: (1)

var LightningBolt10 = {

    getDescription: function() {
        return this.formatDescription('Deal 3 damage. Overload: (1)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LightningBolt10"');
    },

};



exports.LightningBolt10 = LightningBolt10;
