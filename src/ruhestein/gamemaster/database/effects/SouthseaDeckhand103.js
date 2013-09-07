/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SouthseaDeckhand103 = {

    getDescription: function() {
        return this.formatDescription('Has Charge while you have a weapon equipped.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SouthseaDeckhand103"');
    },

};



exports.SouthseaDeckhand103 = SouthseaDeckhand103;
