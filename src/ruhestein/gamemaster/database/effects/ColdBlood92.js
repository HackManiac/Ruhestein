/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ColdBlood92 = {

    getDescription: function() {
        return this.formatDescription('Give a minion +2 Attack. Combo: +4 Attack instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ColdBlood92"');
    },

};



exports.ColdBlood92 = ColdBlood92;
