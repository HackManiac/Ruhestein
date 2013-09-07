/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Nightblade; Battlecry: Deal 3 damage to the enemy hero.

var Nightblade184 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 3 damage to the enemy hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Nightblade184"');
    },

};



exports.Nightblade184 = Nightblade184;
