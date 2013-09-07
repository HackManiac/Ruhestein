/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SilvermoonGuardian634 = {

    getDescription: function() {
        return this.formatDescription('Divine Shield');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SilvermoonGuardian634"');
    },

};



exports.SilvermoonGuardian634 = SilvermoonGuardian634;
