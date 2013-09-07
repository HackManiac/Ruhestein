/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Claw; Give your hero +2 Attack this turn and 2 Armor.

var Claw532 = {

    getDescription: function() {
        return this.formatDescription('Give your hero +2 Attack this turn and 2 Armor.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Claw532"');
    },

};



exports.Claw532 = Claw532;
