/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Savage Roar; Give your characters +2 Attack this turn.

var SavageRoar329 = {

    getDescription: function() {
        return this.formatDescription('Give your characters +2 Attack this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SavageRoar329"');
    },

};



exports.SavageRoar329 = SavageRoar329;
