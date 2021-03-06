/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Mindgames; Put a copy of a random minion from your opponent's deck into the battlefield.

var Mindgames301 = {

    getDescription: function() {
        return this.formatDescription('Put a copy of a random minion from your opponent\'s deck into the battlefield.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Mindgames301"');
    },

};



exports.Mindgames301 = Mindgames301;
