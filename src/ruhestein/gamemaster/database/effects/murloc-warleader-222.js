/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 Murloc Warleader; ALL other Murlocs have +2/+1.

var MurlocWarleader222 = {

    getDescription: function() {
        return this.formatDescription('ALL other Murlocs have +2/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MurlocWarleader222"');
    },

};



exports.MurlocWarleader222 = MurlocWarleader222;
