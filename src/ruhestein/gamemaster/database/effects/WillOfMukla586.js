/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var WillOfMukla586 = {

    getDescription: function() {
        return this.formatDescription('Restore 8 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WillOfMukla586"');
    },

};



exports.WillOfMukla586 = WillOfMukla586;
