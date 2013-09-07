/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 5/5 Stranglethorn Tiger; Stealth

var StranglethornTiger338 = {

    getDescription: function() {
        return this.formatDescription('Stealth');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StranglethornTiger338"');
    },

};



exports.StranglethornTiger338 = StranglethornTiger338;
