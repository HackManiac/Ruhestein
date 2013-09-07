/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Mind Blast; Deal 5 damage to the enemy hero.

var MindBlast415 = {

    getDescription: function() {
        return this.formatDescription('Deal 5 damage to the enemy hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MindBlast415"');
    },

};



exports.MindBlast415 = MindBlast415;
