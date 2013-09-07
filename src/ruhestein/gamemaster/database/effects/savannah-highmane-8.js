/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 6/5 Savannah Highmane; Deathrattle: Summon two 2/2 Hyenas.

var SavannahHighmane8 = {

    getDescription: function() {
        return this.formatDescription('Deathrattle: Summon two 2/2 Hyenas.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SavannahHighmane8"');
    },

};



exports.SavannahHighmane8 = SavannahHighmane8;
