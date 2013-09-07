/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var WorgenInfiltrator112 = {

    getDescription: function() {
        return this.formatDescription('Stealth');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WorgenInfiltrator112"');
    },

};



exports.WorgenInfiltrator112 = WorgenInfiltrator112;
