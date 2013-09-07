/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/3 Voidwalker; Taunt

var Voidwalker340 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Voidwalker340"');
    },

};



exports.Voidwalker340 = Voidwalker340;
