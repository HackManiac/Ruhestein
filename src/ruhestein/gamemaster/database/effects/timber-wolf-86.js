/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Timber Wolf; Your other Beasts have +1 Attack.

var TimberWolf86 = {

    getDescription: function() {
        return this.formatDescription('Your other Beasts have +1 Attack.');
    },

    cast: function() {
        var source = this.getCard();
        this.buffCardsByLocation('battlefield', function(card) {
            return ((card !== source) && card.isBeast());
        });
    },

    buff: {
        currentAttack: 1
    }

};



exports.TimberWolf86 = TimberWolf86;
