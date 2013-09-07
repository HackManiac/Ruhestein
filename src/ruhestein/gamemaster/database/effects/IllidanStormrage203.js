/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var IllidanStormrage203 = {

    getDescription: function() {
        return this.formatDescription('Whenever you play a card, summon a 2/1 Flame of Azzinoth.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "IllidanStormrage203"');
    },

};



exports.IllidanStormrage203 = IllidanStormrage203;
