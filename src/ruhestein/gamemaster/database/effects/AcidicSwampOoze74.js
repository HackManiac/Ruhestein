/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AcidicSwampOoze74 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy your opponent\'s weapon.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AcidicSwampOoze74"');
    },

};



exports.AcidicSwampOoze74 = AcidicSwampOoze74;
