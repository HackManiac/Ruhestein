/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 5/5 Stranglethorn Tiger; Stealth

var StranglethornTiger338 = {

    getDescription: function() {
        return this.formatDescription('Stealth');
    },

    cast: function() {
        this.castStealth();
    }

};



exports.StranglethornTiger338 = StranglethornTiger338;
