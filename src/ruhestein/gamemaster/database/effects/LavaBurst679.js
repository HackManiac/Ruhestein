/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var LavaBurst679 = {

    getDescription: function() {
        return this.formatDescription('Deal 5 damage. Overload: (2)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LavaBurst679"');
    },

};



exports.LavaBurst679 = LavaBurst679;
