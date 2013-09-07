/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var FlameBurst622 = {

    getDescription: function() {
        return this.formatDescription('Shoot 5 missiles at random enemies for 1 damage each.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FlameBurst622"');
    },

};



exports.FlameBurst622 = FlameBurst622;
