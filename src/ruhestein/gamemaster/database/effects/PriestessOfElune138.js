/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var PriestessOfElune138 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Restore 4 Health to your hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "PriestessOfElune138"');
    },

};



exports.PriestessOfElune138 = PriestessOfElune138;
