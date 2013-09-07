/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ArchmageAntonidas220 = {

    getDescription: function() {
        return this.formatDescription('Whenever you cast a spell, put a \'Fireball\' spell into your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArchmageAntonidas220"');
    },

};



exports.ArchmageAntonidas220 = ArchmageAntonidas220;
