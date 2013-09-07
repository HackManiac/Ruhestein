/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Holy Light; Restore #6 Health.

var HolyLight108 = {

    getDescription: function() {
        return this.formatDescription('Restore #6 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HolyLight108"');
    },

};



exports.HolyLight108 = HolyLight108;
