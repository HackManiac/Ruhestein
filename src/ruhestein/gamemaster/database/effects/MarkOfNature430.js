/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MarkOfNature430 = {

    getDescription: function() {
        return this.formatDescription('+4 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MarkOfNature430"');
    },

};



exports.MarkOfNature430 = MarkOfNature430;
