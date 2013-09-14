/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 4/2 Jungle Panther; Stealth

var JunglePanther392 = {

    getDescription: function() {
        return this.formatDescription('Stealth');
    },

    cast: function() {
        this.castStealth();
    }

};



exports.JunglePanther392 = JunglePanther392;
