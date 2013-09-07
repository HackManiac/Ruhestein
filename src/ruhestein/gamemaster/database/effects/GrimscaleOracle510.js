/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GrimscaleOracle510 = {

    getDescription: function() {
        return this.formatDescription('ALL other Murlocs have +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GrimscaleOracle510"');
    },

};



exports.GrimscaleOracle510 = GrimscaleOracle510;
