/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var LesserHeal126 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Restore 2 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LesserHeal126"');
    },

};



exports.LesserHeal126 = LesserHeal126;
