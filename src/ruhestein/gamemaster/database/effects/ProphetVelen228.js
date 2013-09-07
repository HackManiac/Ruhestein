/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (7) 7/7 Prophet Velen; Double the damage and healing of your spells.

var ProphetVelen228 = {

    getDescription: function() {
        return this.formatDescription('Double the damage and healing of your spells.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ProphetVelen228"');
    },

};



exports.ProphetVelen228 = ProphetVelen228;
