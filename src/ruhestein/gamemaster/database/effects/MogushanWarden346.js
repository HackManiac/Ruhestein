/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MogushanWarden346 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MogushanWarden346"');
    },

};



exports.MogushanWarden346 = MogushanWarden346;
