/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 4/5 Sunwalker; Taunt. Divine Shield

var Sunwalker221 = {

    getDescription: function() {
        return this.formatDescription('Taunt. Divine Shield');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Sunwalker221"');
    },

};



exports.Sunwalker221 = Sunwalker221;
