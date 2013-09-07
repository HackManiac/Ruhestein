/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GladiatorsLongbow278 = {

    getDescription: function() {
        return this.formatDescription('Your hero is Immune while attacking.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GladiatorsLongbow278"');
    },

};



exports.GladiatorsLongbow278 = GladiatorsLongbow278;
