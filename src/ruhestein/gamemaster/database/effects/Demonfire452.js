/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Demonfire452 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to a minion.   If it’s a friendly Demon, give it +2/+2 instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Demonfire452"');
    },

};



exports.Demonfire452 = Demonfire452;
