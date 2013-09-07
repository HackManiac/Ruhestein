/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Naga Myrmidon;  

var NagaMyrmidon16 = {

    getDescription: function() {
        return this.formatDescription(' ');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "NagaMyrmidon16"');
    },

};



exports.NagaMyrmidon16 = NagaMyrmidon16;
