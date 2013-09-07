/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var HarvestGolem386 = {

    getDescription: function() {
        return this.formatDescription('Deathrattle: Summon a 2/1 Damaged Golem.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HarvestGolem386"');
    },

};



exports.HarvestGolem386 = HarvestGolem386;
