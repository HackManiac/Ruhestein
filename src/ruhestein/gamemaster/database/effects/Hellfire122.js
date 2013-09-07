/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Hellfire122 = {

    getDescription: function() {
        return this.formatDescription('Deal 3 damage to ALL characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Hellfire122"');
    },

};



exports.Hellfire122 = Hellfire122;
