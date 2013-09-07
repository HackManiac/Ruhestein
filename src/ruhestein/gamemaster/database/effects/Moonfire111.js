/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Moonfire111 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Moonfire111"');
    },

};



exports.Moonfire111 = Moonfire111;
