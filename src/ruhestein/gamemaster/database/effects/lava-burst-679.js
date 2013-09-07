/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Lava Burst; Deal 5 damage. Overload: (2)

var LavaBurst679 = {

    getDescription: function() {
        return this.formatDescription('Deal 5 damage. Overload: (2)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LavaBurst679"');
    },

};



exports.LavaBurst679 = LavaBurst679;
