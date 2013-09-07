/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ImpMaster178 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, deal 1 damage to this minion and summon a 1/1 Imp.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ImpMaster178"');
    },

};



exports.ImpMaster178 = ImpMaster178;
