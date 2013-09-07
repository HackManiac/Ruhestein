/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/3 Defias Ringleader; Combo: Summon a 2/1 Defias Bandit.

var DefiasRingleader417 = {

    getDescription: function() {
        return this.formatDescription('Combo: Summon a 2/1 Defias Bandit.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DefiasRingleader417"');
    },

};



exports.DefiasRingleader417 = DefiasRingleader417;
