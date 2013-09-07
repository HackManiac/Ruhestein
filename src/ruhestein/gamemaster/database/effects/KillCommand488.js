/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Kill Command; Deal 3 damage.  If you have a Beast, deal 5 damage instead.

var KillCommand488 = {

    getDescription: function() {
        return this.formatDescription('Deal 3 damage.  If you have a Beast, deal 5 damage instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KillCommand488"');
    },

};



exports.KillCommand488 = KillCommand488;
