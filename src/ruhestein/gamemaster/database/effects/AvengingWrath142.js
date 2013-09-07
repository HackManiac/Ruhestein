/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AvengingWrath142 = {

    getDescription: function() {
        return this.formatDescription('Shoot 8 missiles at random enemies for 1 damage each.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AvengingWrath142"');
    },

};



exports.AvengingWrath142 = AvengingWrath142;
