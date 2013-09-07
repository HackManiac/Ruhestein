/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 3/1 Dust Devil; Windfury. Overload: (2)

var DustDevil129 = {

    getDescription: function() {
        return this.formatDescription('Windfury. Overload: (2)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DustDevil129"');
    },

};



exports.DustDevil129 = DustDevil129;
