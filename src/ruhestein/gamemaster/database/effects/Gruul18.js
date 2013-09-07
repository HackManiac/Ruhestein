/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Gruul18 = {

    getDescription: function() {
        return this.formatDescription('At the end of each turn, gain +1/+1 .');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Gruul18"');
    },

};



exports.Gruul18 = Gruul18;
