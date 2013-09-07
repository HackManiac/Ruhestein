/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Starfall195 = {

    getDescription: function() {
        return this.formatDescription('Deal 5 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Starfall195"');
    },

};



exports.Starfall195 = Starfall195;
