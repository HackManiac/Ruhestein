/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Blessing of Kings; Give a minion +4/+4. (+4 Attack/+4 Health)

var BlessingOfKings29 = {

    getDescription: function() {
        return this.formatDescription('Give a minion +4/+4. (+4 Attack/+4 Health)');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        this.buffCard(target);
    },

    buff: {
        currentAttack: 4,
        maxHealth: 4
    }

};



exports.BlessingOfKings29 = BlessingOfKings29;
