/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var IceLance188 = {

    getDescription: function() {
        return this.formatDescription('Freeze a character. If it was already Frozen, deal 4 damage instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "IceLance188"');
    },

};



exports.IceLance188 = IceLance188;
