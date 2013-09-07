/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var StonetuskBoar76 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StonetuskBoar76"');
    },

};



exports.StonetuskBoar76 = StonetuskBoar76;
