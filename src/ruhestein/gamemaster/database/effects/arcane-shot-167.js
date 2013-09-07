/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Arcane Shot; Deal 2 damage.

var ArcaneShot167 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArcaneShot167"');
    },

};



exports.ArcaneShot167 = ArcaneShot167;
