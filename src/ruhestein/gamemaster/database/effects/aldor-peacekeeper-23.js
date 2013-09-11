/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 Aldor Peacekeeper; Battlecry: Change an enemy minion's Attack to 1.

var AldorPeacekeeper23 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Change an enemy minion\'s Attack to 1.');
    },

    targetLocations: 'opponentBattlefield',

    cast: function(target) {
        this.buffCard(target);
    },

    castBuff: function(target, buff) {
        buff._delta = target.getCurrentAttack() - 1;
        target.modifyCurrentAttack(-buff._delta);
    },

    uncastBuff: function(target, buff) {
        target.modifyCurrentAttack(buff._delta);
    }

};



exports.AldorPeacekeeper23 = AldorPeacekeeper23;
