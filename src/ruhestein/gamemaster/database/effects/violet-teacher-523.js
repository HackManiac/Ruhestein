/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 3/5 Violet Teacher; Whenever you cast a spell, summon a 1/1 Violet Apprentice.

var VioletTeacher523 = {

    getDescription: function() {
        return this.formatDescription('Whenever you cast a spell, summon a 1/1 Violet Apprentice.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "VioletTeacher523"');
    },

};



exports.VioletTeacher523 = VioletTeacher523;
