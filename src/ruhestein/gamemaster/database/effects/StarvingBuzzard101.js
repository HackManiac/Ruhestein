/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var StarvingBuzzard101 = {

    getDescription: function() {
        return this.formatDescription('Whenever you summon a Beast, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StarvingBuzzard101"');
    },

};



exports.StarvingBuzzard101 = StarvingBuzzard101;
