/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 2/1 Abusive Sergeant; Battlecry: Give a friendly minion +2 Attack this turn.

var AbusiveSergeant577 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly minion +2 Attack this turn.');
    },

    targetLocations: 'battlefield',

    castBattlecry: function(target) {
        var buff = this.buffCard(target);

        this.onEndOfNextPlayerTurn(function() {
            buff.uncast();
        });
    },

    buff: {
        currentAttack: 2
    }

};



exports.AbusiveSergeant577 = AbusiveSergeant577;
