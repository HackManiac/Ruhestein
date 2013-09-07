/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/3 Sunfury Protector; Battlecry: Your other minions gain Taunt.

var SunfuryProtector372 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Your other minions gain Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SunfuryProtector372"');
    },

};



exports.SunfuryProtector372 = SunfuryProtector372;
