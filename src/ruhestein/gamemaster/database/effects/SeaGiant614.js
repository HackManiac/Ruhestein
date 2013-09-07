/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SeaGiant614 = {

    getDescription: function() {
        return this.formatDescription('Costs (1) less for each other minion on the battlefield.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SeaGiant614"');
    },

};



exports.SeaGiant614 = SeaGiant614;
