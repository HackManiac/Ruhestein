/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Bite; Give your hero +4 Attack this turn and 4 Armor.

var Bite266 = {

    getDescription: function() {
        return this.formatDescription('Give your hero +4 Attack this turn and 4 Armor.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Bite266"');
    },

};



exports.Bite266 = Bite266;
