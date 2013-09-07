/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/2 Kobold Geomancer; Spell Power +1

var KoboldGeomancer479 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KoboldGeomancer479"');
    },

};



exports.KoboldGeomancer479 = KoboldGeomancer479;
