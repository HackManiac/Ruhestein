/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/3 Tauren Warrior; Taunt. Enrage: +3 Attack

var TaurenWarrior477 = {

    getDescription: function() {
        return this.formatDescription('Taunt. Enrage: +3 Attack');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TaurenWarrior477"');
    },

};



exports.TaurenWarrior477 = TaurenWarrior477;
