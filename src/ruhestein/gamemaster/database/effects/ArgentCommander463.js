/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 4/3 Argent Commander; Charge. Divine Shield

var ArgentCommander463 = {

    getDescription: function() {
        return this.formatDescription('Charge. Divine Shield');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArgentCommander463"');
    },

};



exports.ArgentCommander463 = ArgentCommander463;
