/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Hunter's Mark; Change a minion's Health to 1 this turn.

var HuntersMark22 = {

    getDescription: function() {
        return this.formatDescription('Change a minion\'s Health to 1 this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HuntersMark22"');
    },

};



exports.HuntersMark22 = HuntersMark22;
