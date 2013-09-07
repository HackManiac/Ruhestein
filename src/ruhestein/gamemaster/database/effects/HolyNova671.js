/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (5) Holy Nova; Deal 2 damage to all enemies.  Restore #2 Health to all  friendly characters.

var HolyNova671 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to all enemies.  Restore #2 Health to all  friendly characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HolyNova671"');
    },

};



exports.HolyNova671 = HolyNova671;
