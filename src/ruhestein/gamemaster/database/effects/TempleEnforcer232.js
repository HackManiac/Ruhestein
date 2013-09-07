/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var TempleEnforcer232 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly minion +3 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TempleEnforcer232"');
    },

};



exports.TempleEnforcer232 = TempleEnforcer232;
