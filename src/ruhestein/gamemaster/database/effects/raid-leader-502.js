/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/2 Raid Leader; Your other minions have +1 Attack.

var RaidLeader502 = {

    getDescription: function() {
        return this.formatDescription('Your other minions have +1 Attack.');
    },

    cast: function() {
        var source = this.getCard();

        this.buffCardsByLocation('battlefield', function(card) {
            return (card !== source);
        });
    },

    buff: {
        currentAttack: 1
    }

};



exports.RaidLeader502 = RaidLeader502;
