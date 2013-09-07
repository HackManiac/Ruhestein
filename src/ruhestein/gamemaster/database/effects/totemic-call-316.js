/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Totemic Call; Hero Power  Summon a random Totem.

var TotemicCall316 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Summon a random Totem.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TotemicCall316"');
    },

};



exports.TotemicCall316 = TotemicCall316;