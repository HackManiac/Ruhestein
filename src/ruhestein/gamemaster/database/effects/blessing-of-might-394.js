/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Blessing of Might; Give a minion +3 Attack.

var BlessingOfMight394 = {

    getDescription: function() {
        return this.formatDescription('Give a minion +3 Attack.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        this.buffCard(target);
    },

    buff: {
        currentAttack: 3
    }

};



exports.BlessingOfMight394 = BlessingOfMight394;
