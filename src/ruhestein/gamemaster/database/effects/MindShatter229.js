/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Mind Shatter; Hero Power  Deal 3 damage.

var MindShatter229 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Deal 3 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MindShatter229"');
    },

};



exports.MindShatter229 = MindShatter229;
