/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 5/2 Reckless Rocketeer; Charge

var RecklessRocketeer560 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "RecklessRocketeer560"');
    },

};



exports.RecklessRocketeer560 = RecklessRocketeer560;
