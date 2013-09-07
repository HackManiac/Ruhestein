/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SpitefulSmith627 = {

    getDescription: function() {
        return this.formatDescription('Enrage: Your weapon has +2 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SpitefulSmith627"');
    },

};



exports.SpitefulSmith627 = SpitefulSmith627;
