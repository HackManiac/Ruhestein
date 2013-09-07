/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DeadlyPoison87 = {

    getDescription: function() {
        return this.formatDescription('Give your weapon +2 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DeadlyPoison87"');
    },

};



exports.DeadlyPoison87 = DeadlyPoison87;
