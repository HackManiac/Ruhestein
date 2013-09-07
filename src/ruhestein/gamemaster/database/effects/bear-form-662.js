/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Bear Form; +2 Health and Taunt.

var BearForm662 = {

    getDescription: function() {
        return this.formatDescription('+2 Health and Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BearForm662"');
    },

};



exports.BearForm662 = BearForm662;
