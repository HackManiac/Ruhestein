/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Misdirection; Secret: When a character attacks your hero, instead he attacks another random character.

var Misdirection447 = {

    getDescription: function() {
        return this.formatDescription('Secret: When a character attacks your hero, instead he attacks another random character.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Misdirection447"');
    },

};



exports.Misdirection447 = Misdirection447;
