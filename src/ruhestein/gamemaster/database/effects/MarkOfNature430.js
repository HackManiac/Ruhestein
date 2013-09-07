/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Mark of Nature; +4 Attack.

var MarkOfNature430 = {

    getDescription: function() {
        return this.formatDescription('+4 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MarkOfNature430"');
    },

};



exports.MarkOfNature430 = MarkOfNature430;
