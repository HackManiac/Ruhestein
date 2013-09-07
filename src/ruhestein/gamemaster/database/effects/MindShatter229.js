/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MindShatter229 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Deal 3 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MindShatter229"');
    },

};



exports.MindShatter229 = MindShatter229;
