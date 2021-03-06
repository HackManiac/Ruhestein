/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Lightning Storm; Deal 2-3 damage to all enemy minions. Overload: (2)

var LightningStorm676 = {

    getDescription: function() {
        return this.formatDescription('Deal 2-3 damage to all enemy minions. Overload: (2)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LightningStorm676"');
    },

};



exports.LightningStorm676 = LightningStorm676;
