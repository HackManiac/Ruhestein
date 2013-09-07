/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DalaranMage388 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DalaranMage388"');
    },

};



exports.DalaranMage388 = DalaranMage388;
