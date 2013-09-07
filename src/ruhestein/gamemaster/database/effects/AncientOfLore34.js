/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AncientOfLore34 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Draw 2 cards; or Restore 8 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncientOfLore34"');
    },

};



exports.AncientOfLore34 = AncientOfLore34;
