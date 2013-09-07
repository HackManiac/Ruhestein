/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var WildPyromancer25 = {

    getDescription: function() {
        return this.formatDescription('After you cast a spell, deal 1 damage to ALL minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WildPyromancer25"');
    },

};



exports.WildPyromancer25 = WildPyromancer25;
