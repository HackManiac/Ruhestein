/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (6) Force of Nature; Summon three 2/2 Treants with Charge that die at the end of the turn.

var ForceOfNature237 = {

    getDescription: function() {
        return this.formatDescription('Summon three 2/2 Treants with Charge that die at the end of the turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ForceOfNature237"');
    },

};



exports.ForceOfNature237 = ForceOfNature237;
