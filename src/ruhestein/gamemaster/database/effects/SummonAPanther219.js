/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SummonAPanther219 = {

    getDescription: function() {
        return this.formatDescription('Summon a 3/2 Panther.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SummonAPanther219"');
    },

};



exports.SummonAPanther219 = SummonAPanther219;
