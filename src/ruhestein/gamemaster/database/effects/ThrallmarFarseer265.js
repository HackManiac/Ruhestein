/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ThrallmarFarseer265 = {

    getDescription: function() {
        return this.formatDescription('Windfury');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ThrallmarFarseer265"');
    },

};



exports.ThrallmarFarseer265 = ThrallmarFarseer265;
