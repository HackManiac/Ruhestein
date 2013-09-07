/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DivineSpirit554 = {

    getDescription: function() {
        return this.formatDescription('Double a minion\'s Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DivineSpirit554"');
    },

};



exports.DivineSpirit554 = DivineSpirit554;
