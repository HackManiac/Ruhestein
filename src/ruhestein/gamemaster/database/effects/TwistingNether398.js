/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var TwistingNether398 = {

    getDescription: function() {
        return this.formatDescription('Destroy all minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TwistingNether398"');
    },

};



exports.TwistingNether398 = TwistingNether398;
