/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (10) 8/8 Sea Giant; Costs (1) less for each other minion on the battlefield.

var SeaGiant614 = {

    getDescription: function() {
        return this.formatDescription('Costs (1) less for each other minion on the battlefield.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SeaGiant614"');
    },

};



exports.SeaGiant614 = SeaGiant614;
