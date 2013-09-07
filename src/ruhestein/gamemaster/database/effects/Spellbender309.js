/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Spellbender309 = {

    getDescription: function() {
        return this.formatDescription('Secret: When an enemy casts a spell on a minion, summon a 1/3 as the new target.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Spellbender309"');
    },

};



exports.Spellbender309 = Spellbender309;
