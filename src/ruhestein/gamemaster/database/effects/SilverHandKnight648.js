/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SilverHandKnight648 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon a 2/2 Squire.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SilverHandKnight648"');
    },

};



exports.SilverHandKnight648 = SilverHandKnight648;
