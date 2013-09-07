/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AngryChicken57 = {

    getDescription: function() {
        return this.formatDescription('Enrage: +5 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AngryChicken57"');
    },

};



exports.AngryChicken57 = AngryChicken57;
