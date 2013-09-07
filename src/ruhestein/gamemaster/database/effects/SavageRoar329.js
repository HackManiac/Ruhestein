/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SavageRoar329 = {

    getDescription: function() {
        return this.formatDescription('Give your characters +2 Attack this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SavageRoar329"');
    },

};



exports.SavageRoar329 = SavageRoar329;
