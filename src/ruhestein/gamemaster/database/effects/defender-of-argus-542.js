/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 3/3 Defender of Argus; Battlecry: Give adjacent minions +1/+1 and Taunt.

var DefenderOfArgus542 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give adjacent minions +1/+1 and Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DefenderOfArgus542"');
    },

};



exports.DefenderOfArgus542 = DefenderOfArgus542;
