/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Sunwalker221 = {

    getDescription: function() {
        return this.formatDescription('Taunt. Divine Shield');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Sunwalker221"');
    },

};



exports.Sunwalker221 = Sunwalker221;
