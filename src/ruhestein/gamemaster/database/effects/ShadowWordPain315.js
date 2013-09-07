/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Shadow Word: Pain; Destroy a minion with 3 or less Attack.

var ShadowWordPain315 = {

    getDescription: function() {
        return this.formatDescription('Destroy a minion with 3 or less Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ShadowWordPain315"');
    },

};



exports.ShadowWordPain315 = ShadowWordPain315;
