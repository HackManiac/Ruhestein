/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ExplosiveShot114 = {

    getDescription: function() {
        return this.formatDescription('Deal 5 damage to a minion and 2 damage to adjacent ones.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ExplosiveShot114"');
    },

};



exports.ExplosiveShot114 = ExplosiveShot114;
