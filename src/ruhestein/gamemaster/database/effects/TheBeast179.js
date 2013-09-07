/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var TheBeast179 = {

    getDescription: function() {
        return this.formatDescription('Deathrattle: Summon a 3/3 Finkle Einhorn for your opponent.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TheBeast179"');
    },

};



exports.TheBeast179 = TheBeast179;
