/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Flare; All minions lose Stealth. Destroy all enemy Secrets. Draw a card.

var Flare630 = {

    getDescription: function() {
        return this.formatDescription('All minions lose Stealth. Destroy all enemy Secrets. Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Flare630"');
    },

};



exports.Flare630 = Flare630;
