/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ProphetVelen228 = {

    getDescription: function() {
        return this.formatDescription('Double the damage and healing of your spells.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ProphetVelen228"');
    },

};



exports.ProphetVelen228 = ProphetVelen228;
