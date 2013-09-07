/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Metamorphosis592 = {

    getDescription: function() {
        return this.formatDescription('Do something crazy.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Metamorphosis592"');
    },

};



exports.Metamorphosis592 = Metamorphosis592;
