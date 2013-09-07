/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ArgentCommander463 = {

    getDescription: function() {
        return this.formatDescription('Charge. Divine Shield');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArgentCommander463"');
    },

};



exports.ArgentCommander463 = ArgentCommander463;
