/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Ancestral Spirit; Choose a minion. When that minion is destroyed, return it to the battlefield.

var AncestralSpirit526 = {

    getDescription: function() {
        return this.formatDescription('Choose a minion. When that minion is destroyed, return it to the battlefield.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncestralSpirit526"');
    },

};



exports.AncestralSpirit526 = AncestralSpirit526;
