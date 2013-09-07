/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 1/4 Frothing Berserker; Whenever a minion takes damage, gain +1 Attack.

var FrothingBerserker69 = {

    getDescription: function() {
        return this.formatDescription('Whenever a minion takes damage, gain +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FrothingBerserker69"');
    },

};



exports.FrothingBerserker69 = FrothingBerserker69;
