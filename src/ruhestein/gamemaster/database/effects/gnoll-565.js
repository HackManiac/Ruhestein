/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/2 Gnoll; Taunt

var Gnoll565 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Gnoll565"');
    },

};



exports.Gnoll565 = Gnoll565;
