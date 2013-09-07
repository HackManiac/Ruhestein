/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GurubashiBerserker624 = {

    getDescription: function() {
        return this.formatDescription('Whenever this minion takes damage, gain +3 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GurubashiBerserker624"');
    },

};



exports.GurubashiBerserker624 = GurubashiBerserker624;
