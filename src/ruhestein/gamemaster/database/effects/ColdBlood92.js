/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Cold Blood; Give a minion +2 Attack. Combo: +4 Attack instead.

var ColdBlood92 = {

    getDescription: function() {
        return this.formatDescription('Give a minion +2 Attack. Combo: +4 Attack instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ColdBlood92"');
    },

};



exports.ColdBlood92 = ColdBlood92;
