/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ArmorUp253 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Gain 2 Armor.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArmorUp253"');
    },

};



exports.ArmorUp253 = ArmorUp253;
