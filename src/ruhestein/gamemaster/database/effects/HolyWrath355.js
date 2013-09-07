/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var HolyWrath355 = {

    getDescription: function() {
        return this.formatDescription('Draw a card and deal damage equal to its cost.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HolyWrath355"');
    },

};



exports.HolyWrath355 = HolyWrath355;
