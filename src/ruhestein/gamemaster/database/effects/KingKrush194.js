/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var KingKrush194 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KingKrush194"');
    },

};



exports.KingKrush194 = KingKrush194;
