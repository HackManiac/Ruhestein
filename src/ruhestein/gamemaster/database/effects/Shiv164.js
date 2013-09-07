/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Shiv164 = {

    getDescription: function() {
        return this.formatDescription('Deal 1 damage. Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Shiv164"');
    },

};



exports.Shiv164 = Shiv164;
