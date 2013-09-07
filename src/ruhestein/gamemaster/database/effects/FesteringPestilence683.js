/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (0) 0/0 Festering Pestilence; Debug text

var FesteringPestilence683 = {

    getDescription: function() {
        return this.formatDescription('Debug text');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FesteringPestilence683"');
    },

};



exports.FesteringPestilence683 = FesteringPestilence683;
