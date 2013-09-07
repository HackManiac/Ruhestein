/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Angry Chicken; Enrage: +5 Attack.

var AngryChicken57 = {

    getDescription: function() {
        return this.formatDescription('Enrage: +5 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AngryChicken57"');
    },

};



exports.AngryChicken57 = AngryChicken57;
