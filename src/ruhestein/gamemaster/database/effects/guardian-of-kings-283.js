/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (7) 5/6 Guardian of Kings; Battlecry: Restore 6 Health to your hero.

var GuardianOfKings283 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Restore 6 Health to your hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GuardianOfKings283"');
    },

};



exports.GuardianOfKings283 = GuardianOfKings283;
