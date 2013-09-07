/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var YouthfulBrewmaster247 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Return a friendly minion from the battlefield to your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "YouthfulBrewmaster247"');
    },

};



exports.YouthfulBrewmaster247 = YouthfulBrewmaster247;
