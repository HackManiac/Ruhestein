/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var HammerOfWrath350 = {

    getDescription: function() {
        return this.formatDescription('Deal 3 damage.  Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HammerOfWrath350"');
    },

};



exports.HammerOfWrath350 = HammerOfWrath350;
