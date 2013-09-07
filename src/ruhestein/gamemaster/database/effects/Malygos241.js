/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Malygos241 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +5');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Malygos241"');
    },

};



exports.Malygos241 = Malygos241;
