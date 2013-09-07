/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Felguard236 = {

    getDescription: function() {
        return this.formatDescription('Taunt. Battlecry: Destroy one of your Mana Crystals.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Felguard236"');
    },

};



exports.Felguard236 = Felguard236;
