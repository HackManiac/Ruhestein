/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MarkOfNature133 = {

    getDescription: function() {
        return this.formatDescription('+4 Health and Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MarkOfNature133"');
    },

};



exports.MarkOfNature133 = MarkOfNature133;
