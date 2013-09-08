/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 2/5 Tundra Rhino; Your Beasts have Charge.

var TundraRhino162 = {

    getDescription: function() {
        return this.formatDescription('Your Beasts have Charge.');
    },

    cast: function() {
        this.buffCardsByLocation('battlefield', function(card) {
            return card.isBeast();
        });
    },

    castBuff: function(target) {
        target.setHasCharge(true);
        target.setIsAsleep(false);
    }
    
};



exports.TundraRhino162 = TundraRhino162;
