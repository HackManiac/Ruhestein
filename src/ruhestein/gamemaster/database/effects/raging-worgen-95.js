/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 Raging Worgen; Enrage: Windfury and +1 Attack

var RagingWorgen95 = {

    getDescription: function() {
        return this.formatDescription('Enrage: Windfury and +1 Attack');
    },

    cast: function() {
        // nop
    },

    castEnrage: function() {
        this.setSelfBuffStacks(1);
    },

    uncastEnrage: function() {
        this.setSelfBuffStacks(0);
    },

    castBuff: function(target) {
        target.setHasWindfury(true);
        target.modifyCurrentAttack(1);
    },

    uncastBuff: function(target) {
        target.setHasWindfury(false);
        target.modifyCurrentAttack(-1);
    }

};



exports.RagingWorgen95 = RagingWorgen95;
