/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BearForm662 = {

    getDescription: function() {
        return this.formatDescription('+2 Health and Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BearForm662"');
    },

};



exports.BearForm662 = BearForm662;
