/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Legacy of the Emperor; Give your minions +2/+2. (+2 Attack/+2 Health)

var LegacyOfTheEmperor441 = {

    getDescription: function() {
        return this.formatDescription('Give your minions +2/+2. (+2 Attack/+2 Health)');
    },

    cast: function() {
        throw new Error('No cast implementation for missions set card effect "LegacyOfTheEmperor441"');
    }

};



exports.LegacyOfTheEmperor441 = LegacyOfTheEmperor441;
