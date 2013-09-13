/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Stomp; Deal 2 damage to all enemies.

var Stomp105 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to all enemies.');
    },

    cast: function() {
        throw new Error('No cast implementation for missions set card effect "Stomp105"');
    },

};



exports.Stomp105 = Stomp105;
