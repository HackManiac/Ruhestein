/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var KoboldGeomancer479 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KoboldGeomancer479"');
    },

};



exports.KoboldGeomancer479 = KoboldGeomancer479;
