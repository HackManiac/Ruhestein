/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Fireball522 = {

    getDescription: function() {
        return this.formatDescription('Deal 6 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Fireball522"');
    },

};



exports.Fireball522 = Fireball522;
