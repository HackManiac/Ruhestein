/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (7) Flamestrike; Deal 4 damage to all enemy minions.

var Flamestrike44 = {

    getDescription: function() {
        return this.formatDescription('Deal 4 damage to all enemy minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Flamestrike44"');
    },

};



exports.Flamestrike44 = Flamestrike44;
