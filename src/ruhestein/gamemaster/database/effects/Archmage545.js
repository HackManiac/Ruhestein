/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 4/7 Archmage; Spell Power +1

var Archmage545 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Archmage545"');
    },

};



exports.Archmage545 = Archmage545;
