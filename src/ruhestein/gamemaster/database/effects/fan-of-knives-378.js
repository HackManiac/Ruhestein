/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Fan of Knives; Deal 1 damage to all enemy minions. Draw a card.

var FanOfKnives378 = {

    getDescription: function() {
        return this.formatDescription('Deal 1 damage to all enemy minions. Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FanOfKnives378"');
    },

};



exports.FanOfKnives378 = FanOfKnives378;
