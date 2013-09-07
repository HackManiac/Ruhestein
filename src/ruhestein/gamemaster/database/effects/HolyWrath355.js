/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (5) Holy Wrath; Draw a card and deal damage equal to its cost.

var HolyWrath355 = {

    getDescription: function() {
        return this.formatDescription('Draw a card and deal damage equal to its cost.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HolyWrath355"');
    },

};



exports.HolyWrath355 = HolyWrath355;
