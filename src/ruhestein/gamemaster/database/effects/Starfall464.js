/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Starfall464 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Deal 5 damage to an enemy; or 2 damage to all of them.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Starfall464"');
    },

};



exports.Starfall464 = Starfall464;
