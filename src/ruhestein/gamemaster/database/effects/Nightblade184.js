/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Nightblade184 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 3 damage to the enemy hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Nightblade184"');
    },

};



exports.Nightblade184 = Nightblade184;
