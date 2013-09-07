/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Secretkeeper483 = {

    getDescription: function() {
        return this.formatDescription('Whenever a Secret is played, gain +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Secretkeeper483"');
    },

};



exports.Secretkeeper483 = Secretkeeper483;
