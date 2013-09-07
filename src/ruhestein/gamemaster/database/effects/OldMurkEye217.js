/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var OldMurkEye217 = {

    getDescription: function() {
        return this.formatDescription('Charge. Has +1 Attack for each other Murloc on the battlefield.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "OldMurkEye217"');
    },

};



exports.OldMurkEye217 = OldMurkEye217;
