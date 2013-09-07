/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 6/5 Fire Elemental; Battlecry: Deal 3 damage.

var FireElemental636 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 3 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FireElemental636"');
    },

};



exports.FireElemental636 = FireElemental636;
