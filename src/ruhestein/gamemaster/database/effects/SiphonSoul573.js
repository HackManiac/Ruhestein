/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SiphonSoul573 = {

    getDescription: function() {
        return this.formatDescription('Destroy a minion. Restore #3 Health to your hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SiphonSoul573"');
    },

};



exports.SiphonSoul573 = SiphonSoul573;
