/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/3 Harvest Golem; Deathrattle: Summon a 2/1 Damaged Golem.

var HarvestGolem386 = {

    getDescription: function() {
        return this.formatDescription('Deathrattle: Summon a 2/1 Damaged Golem.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HarvestGolem386"');
    },

};



exports.HarvestGolem386 = HarvestGolem386;
