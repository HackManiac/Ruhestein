/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Headcrack; Deal 2 damage to the enemy hero. Combo: Return this to your hand next turn.

var Headcrack135 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to the enemy hero. Combo: Return this to your hand next turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Headcrack135"');
    },

};



exports.Headcrack135 = Headcrack135;
