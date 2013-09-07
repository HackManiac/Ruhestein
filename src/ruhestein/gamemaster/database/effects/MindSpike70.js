/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MindSpike70 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Deal 2 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MindSpike70"');
    },

};



exports.MindSpike70 = MindSpike70;
