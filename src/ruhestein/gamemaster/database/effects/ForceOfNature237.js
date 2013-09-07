/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ForceOfNature237 = {

    getDescription: function() {
        return this.formatDescription('Summon three 2/2 Treants with Charge that die at the end of the turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ForceOfNature237"');
    },

};



exports.ForceOfNature237 = ForceOfNature237;
