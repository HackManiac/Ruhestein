/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Dagger Mastery; Hero Power  Equip a 1/2 Dagger; or Give your weapon +1 Attack this turn.

var DaggerMastery201 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Equip a 1/2 Dagger; or Give your weapon +1 Attack this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DaggerMastery201"');
    },

};



exports.DaggerMastery201 = DaggerMastery201;
