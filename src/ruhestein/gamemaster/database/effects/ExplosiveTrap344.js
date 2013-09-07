/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ExplosiveTrap344 = {

    getDescription: function() {
        return this.formatDescription('Secret: When your hero is attacked, deal 2 damage to all enemies.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ExplosiveTrap344"');
    },

};



exports.ExplosiveTrap344 = ExplosiveTrap344;
