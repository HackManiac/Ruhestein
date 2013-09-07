/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Shan'do's Lesson; Summon two 2/2 Treants with Taunt.

var ShandosLesson159 = {

    getDescription: function() {
        return this.formatDescription('Summon two 2/2 Treants with Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ShandosLesson159"');
    },

};



exports.ShandosLesson159 = ShandosLesson159;
