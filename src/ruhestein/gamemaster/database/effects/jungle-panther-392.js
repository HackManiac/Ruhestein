/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 4/2 Jungle Panther; Stealth

var JunglePanther392 = {

    getDescription: function() {
        return this.formatDescription('Stealth');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "JunglePanther392"');
    },

};



exports.JunglePanther392 = JunglePanther392;
