/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SteadyShot481 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Deal 2 damage to the enemy hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SteadyShot481"');
    },

};



exports.SteadyShot481 = SteadyShot481;
