/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Explosive Trap; Secret: When your hero is attacked, deal 2 damage to all enemies.

var ExplosiveTrap344 = {

    getDescription: function() {
        return this.formatDescription('Secret: When your hero is attacked, deal 2 damage to all enemies.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ExplosiveTrap344"');
    },

};



exports.ExplosiveTrap344 = ExplosiveTrap344;
