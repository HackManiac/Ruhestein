/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/6 Spiteful Smith; Enrage: Your weapon has +2 Attack.

var SpitefulSmith627 = {

    getDescription: function() {
        return this.formatDescription('Enrage: Your weapon has +2 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SpitefulSmith627"');
    },

};



exports.SpitefulSmith627 = SpitefulSmith627;
