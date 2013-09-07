/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var KorkronElite130 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KorkronElite130"');
    },

};



exports.KorkronElite130 = KorkronElite130;
