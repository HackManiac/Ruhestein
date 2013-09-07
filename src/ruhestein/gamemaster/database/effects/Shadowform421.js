/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Shadowform; Your Hero Power becomes 'Deal 2 damage'. If already in Shadowform: 3 damage.

var Shadowform421 = {

    getDescription: function() {
        return this.formatDescription('Your Hero Power becomes \'Deal 2 damage\'. If already in Shadowform: 3 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Shadowform421"');
    },

};



exports.Shadowform421 = Shadowform421;
