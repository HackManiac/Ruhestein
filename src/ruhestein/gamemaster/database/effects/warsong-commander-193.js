/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/3 Warsong Commander; Your other minions have Charge.

var WarsongCommander193 = {

    getDescription: function() {
        return this.formatDescription('Your other minions have Charge.');
    },

    cast: function() {
        var source = this.getCard();

        this.buffCardsByLocation('battlefield', function(card) {
            return (card !== source);
        });
    },

    castBuff: function(target) {
        target.setHasCharge(true);
        target.setIsAsleep(false);
    }

};



exports.WarsongCommander193 = WarsongCommander193;
