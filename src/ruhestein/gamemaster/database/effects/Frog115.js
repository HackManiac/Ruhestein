/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (0) 0/1 Frog; Taunt

var Frog115 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Frog115"');
    },

};



exports.Frog115 = Frog115;
