/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Equality; Change the Health of ALL minions to 1.

var Equality383 = {

    getDescription: function() {
        return this.formatDescription('Change the Health of ALL minions to 1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Equality383"');
    },

};



exports.Equality383 = Equality383;
