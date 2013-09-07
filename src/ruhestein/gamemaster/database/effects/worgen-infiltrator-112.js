/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 2/1 Worgen Infiltrator; Stealth

var WorgenInfiltrator112 = {

    getDescription: function() {
        return this.formatDescription('Stealth');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WorgenInfiltrator112"');
    },

};



exports.WorgenInfiltrator112 = WorgenInfiltrator112;
