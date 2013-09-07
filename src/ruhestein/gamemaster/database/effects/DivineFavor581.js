/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DivineFavor581 = {

    getDescription: function() {
        return this.formatDescription('Draw cards until you have as many in hand as your opponent.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DivineFavor581"');
    },

};



exports.DivineFavor581 = DivineFavor581;
