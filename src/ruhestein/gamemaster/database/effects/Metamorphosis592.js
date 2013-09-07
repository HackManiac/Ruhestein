/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (6) Metamorphosis; Do something crazy.

var Metamorphosis592 = {

    getDescription: function() {
        return this.formatDescription('Do something crazy.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Metamorphosis592"');
    },

};



exports.Metamorphosis592 = Metamorphosis592;
