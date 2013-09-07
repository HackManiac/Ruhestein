/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var TinkmasterOverspark245 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Transform a minion into a 5/5 Devilsaur or a 1/1 Squirrel at random.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TinkmasterOverspark245"');
    },

};



exports.TinkmasterOverspark245 = TinkmasterOverspark245;
