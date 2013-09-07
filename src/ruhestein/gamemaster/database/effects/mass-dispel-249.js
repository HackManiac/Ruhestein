/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Mass Dispel; Silence all enemy minions. Draw a card.

var MassDispel249 = {

    getDescription: function() {
        return this.formatDescription('Silence all enemy minions. Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MassDispel249"');
    },

};



exports.MassDispel249 = MassDispel249;
