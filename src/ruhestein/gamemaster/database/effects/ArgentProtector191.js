/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ArgentProtector191 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly minion Divine Shield.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArgentProtector191"');
    },

};



exports.ArgentProtector191 = ArgentProtector191;
