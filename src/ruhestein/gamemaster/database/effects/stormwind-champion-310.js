/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (7) 6/6 Stormwind Champion; Your other minions have +1/+1.

var StormwindChampion310 = {

    getDescription: function() {
        return this.formatDescription('Your other minions have +1/+1.');
    },

    cast: function() {
        var source = this.getCard();
        this.buffCardsByLocation('battlefield', function(card) {
            return (card !== source);
        });
    },

    buff: {
        currentAttack: 1,
        maxHealth: 1
    }

};



exports.StormwindChampion310 = StormwindChampion310;
