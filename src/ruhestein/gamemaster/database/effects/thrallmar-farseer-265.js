/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/3 Thrallmar Farseer; Windfury

var ThrallmarFarseer265 = {

    getDescription: function() {
        return this.formatDescription('Windfury');
    },

    cast: function() {
        this.castWindfury();
    }

};



exports.ThrallmarFarseer265 = ThrallmarFarseer265;
