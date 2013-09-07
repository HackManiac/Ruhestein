/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (0) 0/1 Shadow of Nothing; Mindgames whiffed! Your opponent had no minions!

var ShadowOfNothing582 = {

    getDescription: function() {
        return this.formatDescription('Mindgames whiffed! Your opponent had no minions!');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ShadowOfNothing582"');
    },

};



exports.ShadowOfNothing582 = ShadowOfNothing582;
