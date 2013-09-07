/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 0/1 Homing Chicken; At the start of your turn, destroy this minion and draw 3 cards.

var HomingChicken423 = {

    getDescription: function() {
        return this.formatDescription('At the start of your turn, destroy this minion and draw 3 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HomingChicken423"');
    },

};



exports.HomingChicken423 = HomingChicken423;
