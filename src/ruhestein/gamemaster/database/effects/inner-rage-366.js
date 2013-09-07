/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Inner Rage; Deal 1 damage to a minion.  It gains +2 Attack this turn.

var InnerRage366 = {

    getDescription: function() {
        return this.formatDescription('Deal 1 damage to a minion.  It gains +2 Attack this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "InnerRage366"');
    },

};



exports.InnerRage366 = InnerRage366;
