/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AncientOfWar242 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Ancient of War gets +5 Health and Taunt; or +5 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncientOfWar242"');
    },

};



exports.AncientOfWar242 = AncientOfWar242;
