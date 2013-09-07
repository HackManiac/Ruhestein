/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (8) 5/8 Cenarius; Choose One - Give your other minions +2/+2; or Summon two 2/2 Treants with Taunt.

var Cenarius605 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Give your other minions +2/+2; or Summon two 2/2 Treants with Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Cenarius605"');
    },

};



exports.Cenarius605 = Cenarius605;
