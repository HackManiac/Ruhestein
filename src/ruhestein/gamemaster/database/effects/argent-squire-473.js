/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Argent Squire; Divine Shield

var ArgentSquire473 = {

    getDescription: function() {
        return this.formatDescription('Divine Shield');
    },

    cast: function() {
        this.castDivineShield();
    }

};



exports.ArgentSquire473 = ArgentSquire473;
