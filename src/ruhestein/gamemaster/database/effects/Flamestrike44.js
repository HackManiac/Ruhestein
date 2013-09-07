/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Flamestrike44 = {

    getDescription: function() {
        return this.formatDescription('Deal 4 damage to all enemy minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Flamestrike44"');
    },

};



exports.Flamestrike44 = Flamestrike44;
