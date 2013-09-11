/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Holy Light; Restore #6 Health.

var HolyLight108 = {

    getDescription: function() {
        return this.formatDescription('Restore #6 Health.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        this.healDamage(6, target);
    }

};



exports.HolyLight108 = HolyLight108;
