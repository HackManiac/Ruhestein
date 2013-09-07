/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var TimberWolf86 = {

    getDescription: function() {
        return this.formatDescription('Your other Beasts have +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TimberWolf86"');
    },

};



exports.TimberWolf86 = TimberWolf86;
