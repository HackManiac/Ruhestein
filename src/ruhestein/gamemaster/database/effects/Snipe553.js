/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Snipe553 = {

    getDescription: function() {
        return this.formatDescription('Secret: When your opponent plays a minion, deal 4 damage to it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Snipe553"');
    },

};



exports.Snipe553 = Snipe553;
