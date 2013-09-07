/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ShadowMadness442 = {

    getDescription: function() {
        return this.formatDescription('Gain control of an enemy minion with 3 or less Attack until end of turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ShadowMadness442"');
    },

};



exports.ShadowMadness442 = ShadowMadness442;
