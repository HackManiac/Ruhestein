/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MillhouseManastorm339 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Enemy spells cost (0) next turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MillhouseManastorm339"');
    },

};



exports.MillhouseManastorm339 = MillhouseManastorm339;
