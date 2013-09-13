/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Will of Mukla; Restore 8 Health.

var WillOfMukla586 = {

    getDescription: function() {
        return this.formatDescription('Restore 8 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for missions set card effect "WillOfMukla586"');
    }

};



exports.WillOfMukla586 = WillOfMukla586;
