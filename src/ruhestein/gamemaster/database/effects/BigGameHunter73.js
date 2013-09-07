/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BigGameHunter73 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy a minion with an Attack of 7 or more.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BigGameHunter73"');
    },

};



exports.BigGameHunter73 = BigGameHunter73;
