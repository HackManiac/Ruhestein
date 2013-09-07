/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GromHellscream643 = {

    getDescription: function() {
        return this.formatDescription('Charge.  Enrage: +6 Attack');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GromHellscream643"');
    },

};



exports.GromHellscream643 = GromHellscream643;
