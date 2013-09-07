/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 4/3 Spellbreaker; Battlecry: Silence a minion.

var Spellbreaker42 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Silence a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Spellbreaker42"');
    },

};



exports.Spellbreaker42 = Spellbreaker42;
