/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Circle of Healing; Restore #4 Health to ALL minions.

var CircleOfHealing38 = {

    getDescription: function() {
        return this.formatDescription('Restore #4 Health to ALL minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CircleOfHealing38"');
    },

};



exports.CircleOfHealing38 = CircleOfHealing38;
