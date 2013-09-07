/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Barrel376 = {

    getDescription: function() {
        return this.formatDescription('Is something in this barrel?');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Barrel376"');
    },

};



exports.Barrel376 = Barrel376;
