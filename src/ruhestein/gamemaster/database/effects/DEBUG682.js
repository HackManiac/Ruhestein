/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DEBUG682 = {

    getDescription: function() {
        return this.formatDescription('Debug text');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DEBUG682"');
    },

};



exports.DEBUG682 = DEBUG682;
