/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SavannahHighmane8 = {

    getDescription: function() {
        return this.formatDescription('Deathrattle: Summon two 2/2 Hyenas.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SavannahHighmane8"');
    },

};



exports.SavannahHighmane8 = SavannahHighmane8;
