/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/1 Ironbeak Owl; Battlecry: Silence a minion.

var IronbeakOwl500 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Silence a minion.');
    },

    targetLocations: 'allBattlefields',

    castBattlecry: function(target) {
        target.silence();
    }

};



exports.IronbeakOwl500 = IronbeakOwl500;
