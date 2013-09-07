/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (7) 5/7 Archmage Antonidas; Whenever you cast a spell, put a 'Fireball' spell into your hand.

var ArchmageAntonidas220 = {

    getDescription: function() {
        return this.formatDescription('Whenever you cast a spell, put a \'Fireball\' spell into your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArchmageAntonidas220"');
    },

};



exports.ArchmageAntonidas220 = ArchmageAntonidas220;
