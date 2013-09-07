/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Drain Life; Deal 2 damage. Restore #2 Health to your hero.

var DrainLife332 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage. Restore #2 Health to your hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DrainLife332"');
    },

};



exports.DrainLife332 = DrainLife332;
