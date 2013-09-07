/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AuchenaiSoulpriest656 = {

    getDescription: function() {
        return this.formatDescription('Your cards and powers that restore Health now deal damage instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AuchenaiSoulpriest656"');
    },

};



exports.AuchenaiSoulpriest656 = AuchenaiSoulpriest656;
