/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ScarletCrusader475 = {

    getDescription: function() {
        return this.formatDescription('Divine Shield');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ScarletCrusader475"');
    },

};



exports.ScarletCrusader475 = ScarletCrusader475;
