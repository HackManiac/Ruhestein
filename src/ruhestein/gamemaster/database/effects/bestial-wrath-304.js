/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Bestial Wrath; Give a Beast +2 Attack and Immune this turn.

var BestialWrath304 = {

    getDescription: function() {
        return this.formatDescription('Give a Beast +2 Attack and Immune this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BestialWrath304"');
    },

};



exports.BestialWrath304 = BestialWrath304;
