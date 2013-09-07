/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Argent Squire; Divine Shield

var ArgentSquire473 = {

    getDescription: function() {
        return this.formatDescription('Divine Shield');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArgentSquire473"');
    },

};



exports.ArgentSquire473 = ArgentSquire473;
