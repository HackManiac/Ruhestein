/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (5) Bloodlust; Give your minions +3 Attack this turn.

var Bloodlust256 = {

    getDescription: function() {
        return this.formatDescription('Give your minions +3 Attack this turn.');
    },

    cast: function() {
        var cards = this.collectCardsByLocation('battlefield');

        var buffs = cards.map(function(card) {
            return this.buffCard(card);
        }, this);

        this.onEndOfNextPlayerTurn(function() {
            buffs.forEach(function(buff) {
                buff.uncast();
            });
        });
    },

    buff: {
        currentAttack: 3
    }

};



exports.Bloodlust256 = Bloodlust256;
