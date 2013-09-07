/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 4/4 Master of Disguise; Battlecry: Give a friendly minion Stealth.

var MasterOfDisguise127 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly minion Stealth.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MasterOfDisguise127"');
    },

};



exports.MasterOfDisguise127 = MasterOfDisguise127;
