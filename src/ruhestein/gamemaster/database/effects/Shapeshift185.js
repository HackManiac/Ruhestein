/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Shapeshift; Hero Power +1 Attack this turn.  +1 Armor.

var Shapeshift185 = {

    getDescription: function() {
        return this.formatDescription('Hero Power +1 Attack this turn.  +1 Armor.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Shapeshift185"');
    },

};



exports.Shapeshift185 = Shapeshift185;
