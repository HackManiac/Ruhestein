/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AncientMage176 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give adjacent minions Spell Power +1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncientMage176"');
    },

};



exports.AncientMage176 = AncientMage176;
