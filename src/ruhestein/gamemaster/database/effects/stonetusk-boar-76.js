/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Stonetusk Boar; Charge

var StonetuskBoar76 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StonetuskBoar76"');
    },

};



exports.StonetuskBoar76 = StonetuskBoar76;
