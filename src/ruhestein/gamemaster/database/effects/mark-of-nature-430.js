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

    targetLocations: 'battlefield',

    cast: function(target) {
        this.buffCard(target);
    },

    castBuff: function(target) {
        target.modifyCurrentAttack(4);
    }

};



exports.MarkOfNature430 = MarkOfNature430;
