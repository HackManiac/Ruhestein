/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Stomp105 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to all enemies.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Stomp105"');
    },

};



exports.Stomp105 = Stomp105;
