/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 2/5 Stormwind Knight; Charge

var StormwindKnight603 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StormwindKnight603"');
    },

};



exports.StormwindKnight603 = StormwindKnight603;