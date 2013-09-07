/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Arcane Missiles; Shoot 3 missiles at random enemies for 1 damage each.

var ArcaneMissiles589 = {

    getDescription: function() {
        return this.formatDescription('Shoot 3 missiles at random enemies for 1 damage each.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArcaneMissiles589"');
    },

};



exports.ArcaneMissiles589 = ArcaneMissiles589;
