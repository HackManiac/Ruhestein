/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Arcane Explosion; Deal 1 damage to all enemy minions.

var ArcaneExplosion56 = {

    getDescription: function() {
        return this.formatDescription('Deal 1 damage to all enemy minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArcaneExplosion56"');
    },

};



exports.ArcaneExplosion56 = ArcaneExplosion56;
