/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Mark of Nature; +4 Health and Taunt.

var MarkOfNature133 = {

    getDescription: function() {
        return this.formatDescription('+4 Health and Taunt.');
    },

    targetLocations: 'battlefield',

    cast: function(target) {
        this.buffCard(target);
    },

    castBuff: function(target) {
        target.modifyMaxHealth(4);
        target.setHasTaunt(true);
    }

};



exports.MarkOfNature133 = MarkOfNature133;
