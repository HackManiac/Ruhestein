/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var LegacyOfTheEmperor441 = {

    getDescription: function() {
        return this.formatDescription('Give your minions +2/+2. (+2 Attack/+2 Health)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LegacyOfTheEmperor441"');
    },

};



exports.LegacyOfTheEmperor441 = LegacyOfTheEmperor441;
