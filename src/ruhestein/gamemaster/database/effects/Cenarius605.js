/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Cenarius605 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Give your other minions +2/+2; or Summon two 2/2 Treants with Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Cenarius605"');
    },

};



exports.Cenarius605 = Cenarius605;
