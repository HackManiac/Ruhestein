/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Nozdormu285 = {

    getDescription: function() {
        return this.formatDescription('Players only have 15 seconds to take their turns.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Nozdormu285"');
    },

};



exports.Nozdormu285 = Nozdormu285;
