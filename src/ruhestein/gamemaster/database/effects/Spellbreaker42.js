/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Spellbreaker42 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Silence a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Spellbreaker42"');
    },

};



exports.Spellbreaker42 = Spellbreaker42;
