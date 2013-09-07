/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var VioletTeacher523 = {

    getDescription: function() {
        return this.formatDescription('Whenever you cast a spell, summon a 1/1 Violet Apprentice.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "VioletTeacher523"');
    },

};



exports.VioletTeacher523 = VioletTeacher523;
