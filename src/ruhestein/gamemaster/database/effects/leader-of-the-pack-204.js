/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Leader of the Pack; Give all of your minions +1/+1.

var LeaderOfThePack204 = {

    getDescription: function() {
        return this.formatDescription('Give all of your minions +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LeaderOfThePack204"');
    },

};



exports.LeaderOfThePack204 = LeaderOfThePack204;
