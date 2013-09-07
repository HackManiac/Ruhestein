/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Blizzard276 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to all enemy minions and Freeze them.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Blizzard276"');
    },

};



exports.Blizzard276 = Blizzard276;
