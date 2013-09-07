/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ShadowOfNothing582 = {

    getDescription: function() {
        return this.formatDescription('Mindgames whiffed! Your opponent had no minions!');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ShadowOfNothing582"');
    },

};



exports.ShadowOfNothing582 = ShadowOfNothing582;
