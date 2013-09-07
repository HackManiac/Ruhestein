/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Betrayal198 = {

    getDescription: function() {
        return this.formatDescription('An enemy minion deals its damage to the minions next to it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Betrayal198"');
    },

};



exports.Betrayal198 = Betrayal198;
