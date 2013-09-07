/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Animal Companion; Summon a random Beast Companion.

var AnimalCompanion578 = {

    getDescription: function() {
        return this.formatDescription('Summon a random Beast Companion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AnimalCompanion578"');
    },

};



exports.AnimalCompanion578 = AnimalCompanion578;
