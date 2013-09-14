/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 5/4 Ancient Brewmaster; Battlecry: Return a friendly minion from the battlefield to your hand.

var AncientBrewmaster572 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Return a friendly minion from the battlefield to your hand.');
    },

    targetLocations: 'battlefield',

    cast: function(target) {
        target.moveTo('hand');
    }

};



exports.AncientBrewmaster572 = AncientBrewmaster572;
