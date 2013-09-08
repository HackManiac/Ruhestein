/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 3/2 Youthful Brewmaster; Battlecry: Return a friendly minion from the battlefield to your hand.

var YouthfulBrewmaster247 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Return a friendly minion from the battlefield to your hand.');
    },

    targetLocations: 'battlefield',

    castBattlecry: function(target) {
        target.moveTo('hand');
    },

};



exports.YouthfulBrewmaster247 = YouthfulBrewmaster247;
