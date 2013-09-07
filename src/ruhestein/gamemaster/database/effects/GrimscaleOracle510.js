/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Grimscale Oracle; ALL other Murlocs have +1 Attack.

var GrimscaleOracle510 = {

    getDescription: function() {
        return this.formatDescription('ALL other Murlocs have +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GrimscaleOracle510"');
    },

};



exports.GrimscaleOracle510 = GrimscaleOracle510;
