/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 SI:7 Agent; Combo: Deal 2 damage.

var SI7Agent286 = {

    getDescription: function() {
        return this.formatDescription('Combo: Deal 2 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SI7Agent286"');
    },

};



exports.SI7Agent286 = SI7Agent286;
