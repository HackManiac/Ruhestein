/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Feral Spirit; Summon two 2/3 Spirit Wolves with Taunt. Overload: (2)

var FeralSpirit214 = {

    getDescription: function() {
        return this.formatDescription('Summon two 2/3 Spirit Wolves with Taunt. Overload: (2)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FeralSpirit214"');
    },

};



exports.FeralSpirit214 = FeralSpirit214;
