/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BattleRage664 = {

    getDescription: function() {
        return this.formatDescription('Draw a card for each damaged minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BattleRage664"');
    },

};



exports.BattleRage664 = BattleRage664;
