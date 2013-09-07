/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Divine Spirit; Double a minion's Health.

var DivineSpirit554 = {

    getDescription: function() {
        return this.formatDescription('Double a minion\'s Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DivineSpirit554"');
    },

};



exports.DivineSpirit554 = DivineSpirit554;
