/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Shadow Madness; Gain control of an enemy minion with 3 or less Attack until end of turn.

var ShadowMadness442 = {

    getDescription: function() {
        return this.formatDescription('Gain control of an enemy minion with 3 or less Attack until end of turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ShadowMadness442"');
    },

};



exports.ShadowMadness442 = ShadowMadness442;
