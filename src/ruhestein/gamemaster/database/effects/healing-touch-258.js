/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Healing Touch; Restore #8 Health.

var HealingTouch258 = {

    getDescription: function() {
        return this.formatDescription('Restore #8 Health.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        this.healDamage(8, target);
    }

};



exports.HealingTouch258 = HealingTouch258;
