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

    cast: function() {
        throw new Error('No cast implementation for effect "HealingTouch258"');
    },

};



exports.HealingTouch258 = HealingTouch258;
