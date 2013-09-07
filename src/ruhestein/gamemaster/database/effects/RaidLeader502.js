/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var RaidLeader502 = {

    getDescription: function() {
        return this.formatDescription('Your other minions have +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "RaidLeader502"');
    },

};



exports.RaidLeader502 = RaidLeader502;
