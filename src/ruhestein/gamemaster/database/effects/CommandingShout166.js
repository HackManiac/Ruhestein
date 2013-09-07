/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Commanding Shout; Your minions can't be reduced below 1 Health this turn.

var CommandingShout166 = {

    getDescription: function() {
        return this.formatDescription('Your minions can\'t be reduced below 1 Health this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CommandingShout166"');
    },

};



exports.CommandingShout166 = CommandingShout166;
