/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SunfuryProtector372 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Your other minions gain Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SunfuryProtector372"');
    },

};



exports.SunfuryProtector372 = SunfuryProtector372;
