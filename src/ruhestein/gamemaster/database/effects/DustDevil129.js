/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DustDevil129 = {

    getDescription: function() {
        return this.formatDescription('Windfury. Overload: (2)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DustDevil129"');
    },

};



exports.DustDevil129 = DustDevil129;
