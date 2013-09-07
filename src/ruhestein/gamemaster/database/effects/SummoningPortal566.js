/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 0/4 Summoning Portal; Your minions cost (2) less, but not less than (1).

var SummoningPortal566 = {

    getDescription: function() {
        return this.formatDescription('Your minions cost (2) less, but not less than (1).');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SummoningPortal566"');
    },

};



exports.SummoningPortal566 = SummoningPortal566;
