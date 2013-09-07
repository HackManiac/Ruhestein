/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Mark of Nature; Choose One - Give a minion +4 Attack; or +4 Health and Taunt.

var MarkOfNature149 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Give a minion +4 Attack; or +4 Health and Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MarkOfNature149"');
    },

};



exports.MarkOfNature149 = MarkOfNature149;
