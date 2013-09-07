/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MasterOfDisguise127 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly minion Stealth.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MasterOfDisguise127"');
    },

};



exports.MasterOfDisguise127 = MasterOfDisguise127;
